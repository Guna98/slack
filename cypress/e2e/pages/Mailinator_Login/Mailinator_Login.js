export class MailinatorLogin {
    constructor() {
        this.elements = {
            inboxField: '#inbox_field',
            primaryBtn: 'button.primary-btn',
            emailSubject: 'td:contains("Invitation to Oren")',
            passwordField: 'Password:',
           // skipButton: 'button:contains("Skip")',
            skipButton: '.css-5zaojw',
            nextButton: 'button:contains("Finish")',
            preferencesIcon: '#preferences-geenral-supplier > .chakra-link > svg, #preferences > .chakra-link',
           // personalProfileButton: 'button:contains("Personal Profile")',
            personalProfileButton: 'Personal Profile',
            updatePasswordButton: 'Update Password',
            oldPasswordInput: 'input[placeholder="Old Password"]',
            //verifyButton: 'Verify',
            verifyButton: '.css-ujdiur',
            //newPasswordInput: 'input[placeholder="New Password"]',
            newPasswordInput: '#newPassword',
            saveButton: '.css-ujdiur',
            successMessage: 'Password Updated Successfully'
        }
    }

    visitMailinator(mailinatorUrl, email) {
        cy.visit(mailinatorUrl);
        cy.get(this.elements.inboxField).type(email);
        cy.get(this.elements.primaryBtn).click();
        
        cy.wait(10000);
        // Wait for the table to be visible and have content
        cy.contains('td' , 'Invitation to Oren')
            .should('be.visible')
            .and('have.length.gt', 0)
            .then($emails => {
                // If we found any emails
                if ($emails.length > 0) {
                    cy.wrap($emails.first()).click();
                } else {
                    cy.log('No emails found');
                }
            });
            
        return this;
    }

    extractPassword() {
        cy.wait(5000)
        return cy.contains(this.elements.passwordField).invoke('text').then((text) => {
            const sanitizedText = text.replace(/\\r\\n/g, ''); 
            const match = sanitizedText.match(/Password:\s*([\S#]+)(?=\s*You)/);
            const dynamicPassword = match ? match[1] : 'Password not found';
            cy.wrap(dynamicPassword).as('dynamicPassword'); 
            cy.log('Extracted Password: ' + dynamicPassword); 
        });
    }

    performSupplierLogin(loginUrl, email, password) {
        cy.visit(loginUrl);
        cy.origin(loginUrl, { args: { email, password } }, ({ email, password }) => {
            cy.log('Attempting to enter email: ' + email);
            cy.get('input[name="email"]', { timeout: 1000 }).should('be.visible').type(email);
            cy.get('input[name="password"]').clear().type(password, { parseSpecialCharSequences: false });
            cy.get('.css-ye9xn6 > .chakra-button').click();
        });
        return this;
    }

    skipInitialSetup(baseUrl) {
        const elements = this.elements;
        cy.origin(baseUrl, { args: { elements } }, ({ elements }) => {
            // Wait for the page to load
            cy.get('body', { timeout: 10000 }).should('be.visible');
            
            // Function to attempt clicking the skip button
            const tryClickSkip = () => {
                cy.get('body').then($body => {
                    if ($body.find(elements.skipButton).length > 0) {
                        cy.get(elements.skipButton).click({ force: true });
                        cy.log('Skip button clicked');
                    }
                });
            };

            // Function to attempt clicking the next button
            const tryClickNext = () => {
                cy.wait(3000)
                cy.get('body').then($body => {
                    if ($body.find(elements.nextButton).length > 0) {
                        cy.get(elements.nextButton)
                            .should('be.visible')
                            .and('not.be.disabled')
                            .click({ force: true });
                        cy.log('Next button clicked');
                    }
                });
            };

            // Attempt to skip and proceed multiple times
            for (let i = 0; i < 3; i++) {
                tryClickSkip();
                tryClickNext(); // Ensure this function is called
                cy.wait(2000); // Wait between attempts
            }

            // Final check to see if we've moved past the setup
            cy.get('body').then($body => {
                const setupElementsExist = $body.find(elements.skipButton).length > 0 || 
                                           $body.find(elements.nextButton).length > 0;
                
                if (!setupElementsExist) {
                    cy.log('Initial setup completed or skipped successfully.');
                } else {
                    cy.log('Warning: Setup elements still present after attempts to skip.');
                    cy.wait(3000)
                }
            });
        });
        return this;
    }

    navigateToPersonalProfile(baseUrl) {
        const elements = this.elements;
        cy.origin(baseUrl, { args: { elements } }, ({ elements }) => {
            // Wait for the page to stabilize
            cy.wait(2000);

            // Use a retry mechanism for clicking the preferences icon
            cy.get('body').then($body => {
                const clickPreferences = () => {
                    if ($body.find(elements.preferencesIcon).length > 0) {
                        cy.get(elements.preferencesIcon)
                            .should('be.visible')
                            .click({ force: true })
                            .then(() => {
                                // Check if the personal profile button is visible
                                cy.contains(elements.personalProfileButton, { timeout: 5000 })
                                    .should('be.visible')
                                    .then($btn => {
                                        if ($btn.length > 0) {
                                            cy.wrap($btn).click({ force: true });
                                        } else {
                                            // If not visible, retry clicking preferences
                                            clickPreferences();
                                        }
                                    });
                            });
                    } else {
                        // If preferences icon not found, wait and retry
                        cy.wait(1000).then(clickPreferences);
                    }
                };

                clickPreferences();
            });
        });
        return this;
    }


    updatePassword(baseUrl, oldPassword,) {
        const elements = this.elements;
        cy.fixture('collab_data.json').then((collabData) => {
            const newPassword = collabData.password;
            cy.origin(baseUrl, { args: { oldPassword, newPassword, elements } }, ({ oldPassword, newPassword, elements }) => {
                cy.contains(elements.updatePasswordButton).click();
                cy.get(elements.oldPasswordInput).type(oldPassword);
                cy.get(elements.verifyButton).click().then(() => {
                    cy.contains('Please enter valid password').should('not.exist').then(() => {
                        cy.get(elements.newPasswordInput).type(newPassword);
                        cy.get(elements.saveButton).click();
                        cy.contains(elements.successMessage).should('be.visible').then(() => {
                            cy.log('Password updated successfully.');
                        });
                    });
                });
            });
        });
        cy.SignOut()
        return this;
    }
}

import assign_monthly_que_collab from '../../../fixtures/assign_monthly_que_collab.json';

export class FillMonthlyQuestionsCollab{

    //select_question = 'p:contains("CSR Details")'
    view_report = 'button:contains("View Report")'
    monthSelector = 'div[class="css-z2llg0"]'
    freezeDataButton = 'div[class="css-lxebfo"] div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__track css-p27qcy"]'
    unitSelector = 'select.chakra-select[id^="clmstpk"]'  // More specific selector
    currentFYInput = 'input[placeholder="Enter number"]'
    popup_freezeDataBurron= 'button[class="chakra-button css-qk3wsl"]'
    hazardous_waste_current_fy_question = 'button[data-accordion_button="Other Hazardous Waste (G) Current FY-RP-MN-2024-4"]'
    hazardous_waste_question_tab = 'button[id="accordion-button-:rqj:"] div[class="css-m7zxlc"]'
    send_for_review_button ='div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    hazardous_waste_previous_fy_question = 'button[data-accordion_button="Other Hazardous Waste (G) Previous FY-RP-MN-2024-4"]'
    addMoreButton = 'div[id="clxmrbdnw003y8xwas1cckg3u-RP-MN-2024-4"] button[class="chakra-button css-yc7ed"]:contains("Add More")'
    addMoreButton_2 = 'div[class="chakra-accordion__panel css-1inji5u"] button[class="chakra-button css-yc7ed"]:contains("Add More")'
    removeLastButton = 'button[class*="chakra-button"][aria-label="remove"]:last'
    confirm_delete_row_from_all_months ='button[class="chakra-button css-18lhp6g"]'
    currentFYInput_2 = 'input[id="clqm61gog00rgdikpwxyr0qpv"]'
    select_question_waste_generated='p:contains("9a. Waste Generated")'
    todo_status = 'span:contains("TO DO")'
    edit_button = 'button:contains("Edit Data")'
    approval_status = 'span:contains("NEEDS APPROVAL")'
    accept_button = 'button:contains("Accept")'
    reject_button = 'button:contains("Reject")'
    cancel_button = 'button[class="chakra-modal__close-btn css-1ik4h6n"]'
    cancel1_button = 'button[class="chakra-button css-6vqesk"]'
    plastic_waste_generated = 'p[class="chakra-text css-j34013"]'
    tab_open = 'p[class="chakra-text css-1xjf0a9"]'
    water_tab = ".css-197tcrq"


    


    click_view_report(){
        cy.wait(3000)
        cy.get(this.view_report).then($elements => {
            // If we found any BRSR reports
            if ($elements.length > 0) {
                // Click the first one (assumed to be the most recent)
                cy.wrap($elements.first()).click();
            } else {
                // If no BRSR reports found, log a message
                cy.log('No Report Found');
            }
        });
        return this;
    }

    // scrollDown() {
    //     // Scroll to the first matching element to ensure it is in view
    //     cy.get(this.plastic_waste_generated).first().scrollIntoView();
    //     return this;
    // }
    // scrollDownHazard() {
    //     // Scroll to the first matching element to ensure it is in view
    //     cy.get(this.hazardous_waste_current_fy_question).first().scrollIntoView();
    //     return this;
    // }


    selectMonth(targetMonth) {
        // Click the month
        cy.get(this.monthSelector).contains(targetMonth).click({force: true});
        
        // Wait for a short time to allow the UI to update
        cy.wait(10000);

        // Verify that the month is selected by checking for the new class
        //cy.get(this.monthSelector).contains(targetMonth).should('have.class', 'div[class="css-nbs6ed"]');
        //cy.wait(10000);
        return this;
    }

    shiftMonth(direction) {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.get(this.monthSelector).filter('.selected-month-class').invoke('text').then((currentMonth) => {
            let currentIndex = months.indexOf(currentMonth);
            let targetIndex;

            if (direction === 'next') {
                targetIndex = (currentIndex + 1) % months.length;
            } else if (direction === 'previous') {
                targetIndex = (currentIndex - 1 + months.length) % months.length;
            } else {
                throw new Error("Invalid direction. Use 'next' or 'previous'.");
            }

            this.selectMonth(months[targetIndex]);
        });

        return this;
    }

    fillAprilData() {
        cy.wait(3000);
        cy.get(this.plastic_waste_generated).first().scrollIntoView();
        cy.wait(3000);
        // Select 'Kilogram' from the unit dropdown
        cy.get(this.unitSelector).should('exist').then($selects => {
            if ($selects.length > 1) {
                cy.wrap($selects).filter(':visible').first().select('3', { force: true });
            } else {
                cy.wrap($selects).select('3', { force: true });
            }
        });

        // Enter a value in the Current FY input
        const randomValue = Math.floor(Math.random() * 1000) + 1;
        cy.get(this.currentFYInput).should('exist').should('be.visible').then($inputs => {
            if ($inputs.length > 1) {
                cy.wrap($inputs).filter(':visible').first().clear({ force: true }).type(randomValue.toString(), { force: true });
            } else {
                cy.wrap($inputs).clear({ force: true }).type(randomValue.toString(), { force: true });
            }
        });
        cy.get(this.hazardous_waste_current_fy_question).first().scrollIntoView();
        // Increase the timeout for finding the hazardous waste question button
        cy.get(this.hazardous_waste_current_fy_question, { timeout: 10000 }).click() // Increased timeout to 10 seconds
        //cy.get(this.addMoreButton_2).should('be.visible').first().click()
        

        //cy.get(this.hazardous_waste_previous_fy_question).click()
        
        //cy.get(this.addMoreButton).click()
        

        // Add an assertion to ensure the freeze action was successful
        //cy.contains('Marked as complete successfully', { timeout: 10000 }).should('be.visible');

        // Function to generate random details
         const generateRandomDetails = () => `Test Details ${Math.floor(Math.random() * 1000)}`;

        // // Fill first "Enter details" field
        const detailsInput1 = 'input[id="clqm61gog00rfdikpldfmnhxb"]';
        cy.get(detailsInput1)
            .should('exist')
            .then($inputs => {
                // Log the number of inputs found
                cy.log(`Found ${$inputs.length} input(s) for detailsInput1.`);
                
                if ($inputs.length > 1) {
                    cy.wrap($inputs).filter(':visible').first()
                        .clear({ force: true })
                        .type(generateRandomDetails());
                } else {
                    cy.wrap($inputs)
                        .clear({ force: true })
                        .type(generateRandomDetails());
                }
            });
        
        // Add random value for currentFYInput_2
        const randomValue2 = Math.floor(Math.random() * 1000) + 1;
        cy.get(this.currentFYInput_2)
            .should('exist')
            .then($inputs => {
                if ($inputs.length > 1) {
                    cy.wrap($inputs).filter(':visible').first()
                        .clear({ force: true })
                        .type(randomValue2.toString(), { force: true });
                } else {
                    cy.wrap($inputs)
                        .clear({ force: true })
                        .type(randomValue2.toString(), { force: true });
                }
            });
        
    // Click the Freeze Data button
    cy.scrollTo(0, 0, { ensureScrollable: false });
    cy.get(this.freezeDataButton).click();
    // cy.get(this.popup_freezeDataBurron).should('be.visible').then(($button) => {
    //     if ($button.length) {
    //         cy.wrap($button).click();
    //     } else {
    //         cy.log('Popup freeze data button is not visible, skipping click.');
    //     }
    // });
    // cy.wait(3000);

        return this;
    }

    NonfillAprilData() {
        cy.get(this.plastic_waste_generated).first().scrollIntoView();
        const randomValue = Math.floor(Math.random() * 1000) + 1;
        cy.get(this.currentFYInput, { timeout: 10000 }) // Increased timeout to 10 seconds
            .should('exist')
            .should('be.visible') // Ensure the input is visible
            .then($inputs => {
                if ($inputs.length > 1) {
                    cy.wrap($inputs).filter(':visible').first().clear({ force: true }).type(randomValue.toString(), { force: true });
                } else {
                    cy.wrap($inputs).clear({ force: true }).type(randomValue.toString(), { force: true });
                }
            });
    cy.get(this.freezeDataButton).click()

        return this;
    }

    loopThroughMonthsAndFreeze() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            
            if (month === 'Apr') {
                this.NonfillAprilData();
                cy.wait(5000);
                cy.get(this.popup_freezeDataBurron).click()
                cy.log('Please select unit for all data points'); // Log the error message
                expect('Please select unit for all data points').to.be.equal('Please select unit for all data points'); // Validate the error message
                cy.wait(3000);
                // Ensure the cancel button is visible before clicking
                // cy.get(this.cancel_button).should('be.visible').then(($button) => {
                //     if ($button.length) {
                //         cy.wrap($button).click({ multiple: true, force: true });
                //     } else {
                //         cy.log('Cancel button is not visible, skipping click.');
                //     }
                // });
                cy.get(this.cancel_button).click({ multiple: true, force: true });
                cy.wait(3000);
                // Click the tab_open element, forcing the click even if it's covered
                cy.get(this.tab_open).click({ multiple: true, force: true });
                cy.wait(3000);
               // cy.get(this.cancel1_button).click({ multiple: true, force: true });
                this.fillAprilData();
                cy.wait(5000);
                
                this.checkQuestionApprovalStatus().then(() => {
                    // Additional logic can be added here if needed
                });
                
                // After filling April data, click the popup freeze data button
                cy.get(this.popup_freezeDataBurron).click();
                cy.wait(10000)
                this.checkQuestionNeedsApprovalStatus();
                cy.wait(5000);
            } else {
                cy.wait(10000);
                // Check the approval status before clicking the freeze data button
                
               // cy.wait(5000);
                // Call the checkQuestionApprovalStatus method
                this.checkQuestionApprovalStatus().then(() => {
                    cy.get(this.freezeDataButton).should('be.visible').and('not.be.disabled').then($buttons => {
                        // If there are multiple buttons, click the first visible one
                        if ($buttons.length > 1) {
                            cy.wrap($buttons).filter(':visible').first().click();
                        } else {
                            // If there's only one button, click it
                            cy.wrap($buttons).click();
                            this.checkQuestionNeedsApprovalStatus();
                        }
                    });
                });
                
                // Add an assertion to ensure the freeze action was successful
                //cy.wait(10000);
                //cy.contains('Marked as complete successfully', { timeout: 10000 }).should('be.visible');
            }
            
            // Wait for UI to update
            cy.wait(5000);
        });

        return this;
    }

    click_send_review_button(){
        cy.wait(3000)
        cy.get(this.send_for_review_button).click();
        cy.wait(3000)

        // Define checkEditButton as an inner function
        const checkEditButton = () => {
            const elements = [this.send_for_review_button];
            const messages = [
                'User should able to edit the data',
            ];
            return cy.get(elements).then(($els) => {
                const visibilityChecks = elements.map((element, index) => {
                    return cy.get(element).then(($el) => {
                        const isVisible = $el.is(':visible');
                        expect(isVisible, messages[index]).to.be.true;
                        return isVisible;
                    });
                });
                return Promise.all(visibilityChecks);
            });
        };

        // Call the checkEditButton function
        checkEditButton();
    }


    click_select_question() {
        // Check the status of the assigned question
        const statusElements = [this.todo_status];
        const statusMessages = [
            'TO DO status should be visible for the assigned question',
        ];
        return cy.get(statusElements).then(($statusEls) => {
            const statusChecks = statusElements.map((statusElement, index) => {
                return cy.get(statusElement).then(($statusEl) => {
                    const isVisible = $statusEl.is(':visible');
                    expect(isVisible, statusMessages[index]).to.be.true; // Expect the status to be visible
                    return isVisible;
                });
            });
            return Promise.all(statusChecks);
        });
    }

    hasNoAccessToAcceptOrReject() {
        // Check if the specified button (Accept or Reject) is not visible
        const buttonSelector = [this.accept_button,this.reject_button];
        return cy.get(buttonSelector).then(($button) => {
            const isVisible = $button.is(':visible');
            expect(isVisible, 'Colloborator should not have access to accept and reject').to.be.false; // Expect the button to be not visible
            return !isVisible; // Return the negation of visibility
        });
    }

    checkEditButton() {
        const elements = [this.edit_button];
        const messages = [
            'User should able to edit the data',
];
        return cy.get(elements).then(($els) => {
            const visibilityChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const isVisible = $el.is(':visible');
                    expect(isVisible, messages[index]).to.be.true;
                    return isVisible;
                });
            });
            return Promise.all(visibilityChecks);
        });
    }
    checkQuestionApprovalStatus() {
        cy.wait(3000)
        //cy.get(this.tab_open).click({ multiple: true, force: true });
        cy.wait(3000);
        cy.get(this.plastic_waste_generated).first().scrollIntoView();
        cy.wait(3000);
        const elements = [this.unitSelector, this.currentFYInput];
        const messages = [
            'Collaborator should have access to fill data for the assigned question in the selected month',

];
        return cy.get(elements).then(($els) => {
            const visibilityChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const isVisible = $el.is(':visible');
                    expect(isVisible, messages[index]).to.be.true;
                    return isVisible;
                });
            });
            cy.wait(2000)
            return Promise.all(visibilityChecks);
        });
    }

    checkQuestionNeedsApprovalStatus() {
        cy.wait(3000)
        const elements = [this.approval_status];
        const messages = [
            '"Needs Approval" status should be visible for the assigned question in the selected month',

];
        return cy.get(elements).then(($els) => {
            const visibilityChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const isVisible = $el.is(':visible');
                    expect(isVisible, messages[index]).to.be.true;
                    return isVisible;
                });
            });
            cy.wait(2000)
            return Promise.all(visibilityChecks);
        });
    }
 

}

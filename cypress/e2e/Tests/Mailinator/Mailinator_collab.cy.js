import { MailinatorLoginCollab } from "../../pages/Mailinator_Login/Mailinator_Login_Collab.js";
import collabData from '../../../fixtures/collab_data.json';

describe('Mailinator', function() {
    const mailinatorLogin = new MailinatorLoginCollab();

    it('Process multiple collaborator emails', function () {
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Failed to execute \'send\' on \'WebSocket\': Still in CONNECTING state.') ||
                err.message.includes('Cannot read properties of undefined')) {
                return false;
            }
        });

        // Loop through all collaborator emails
        for (let i = 0; i < collabData.email.length; i++) {
            cy.log(`Processing collaborator: ${collabData.email[i]}`);

            mailinatorLogin
                .visitMailinator(collabData.mailinatorurl, collabData.email[i])
                .extractPassword()
                .then(() => {
                    cy.get('@dynamicPassword').then((dynamicPassword) => {
                        mailinatorLogin
                            .performSupplierLogin(collabData.loginurl, collabData.email[i], dynamicPassword)
                            .skipInitialSetup(collabData.baseurl)
                            .navigateToPersonalProfile(collabData.baseurl)
                            .updatePassword(collabData.baseurl, dynamicPassword, i); // Pass index to get the correct password
                    });
                });
            
            // Add a small delay between processing each collaborator
            cy.wait(2000);
        }
    });
});

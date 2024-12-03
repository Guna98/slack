import { MailinatorLoginBU } from "../../pages/Mailinator_Login/Mailinator_Login_BU";
import buData from '../../../fixtures/business_unit.json';



describe('Mailinator', function() {
    const mailinatorLoginbu = new MailinatorLoginBU();

it('Process multiple collaborator emails', function () {
    cy.on('uncaught:exception', (err) => {
        if (err.message.includes('Failed to execute \'send\' on \'WebSocket\': Still in CONNECTING state.') ||
            err.message.includes('Cannot read properties of undefined')) {
            return false;
        }
    });

    // Loop through all collaborator emails
    for (let i = 0; i < buData.email.length; i++) {
        cy.log(`Processing Business Unit: ${buData.email[i]}`);

        mailinatorLoginbu
            .visitMailinator(buData.mailinatorurl, buData.email[i])
            .extractPassword()
            .then(() => {
                cy.get('@dynamicPassword').then((dynamicPassword) => {
                    mailinatorLoginbu
                        .performSupplierLogin(buData.loginurl, buData.email[i], dynamicPassword)
                        //.skipInitialSetup(buData.baseurl)
                        .navigateToPersonalProfile(buData.baseurl)
                        .updatePassword(buData.baseurl, dynamicPassword, i); // Pass index to get the correct password
                });
            });
        
        cy.wait(2000);
    }
});
});


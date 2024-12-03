import { MailinatorLogin } from "../../pages/Mailinator_Login/Mailinator_Login";

describe('Mailinator', function() {
    const mailinatorLogin = new MailinatorLogin();
    let sustainabilityEmail, mailinatorUrl, loginUrl, baseUrl, sustainabilityPassword; 

    before(function() {
        cy.fixture('stmember_data.json').then((data) => {
            sustainabilityEmail = data.userEmail;
            mailinatorUrl = data.mailinatorurl; 
            loginUrl = data.loginurl;
            baseUrl = data.baseurl;
            sustainabilityPassword = data.password;
        });
    });

    it('Use the extracted password for sustinability and reset', function () {
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Failed to execute \'send\' on \'WebSocket\': Still in CONNECTING state.') ||
                err.message.includes('Cannot read properties of undefined')) {
                return false;
            }
        });

        mailinatorLogin
            .visitMailinator(mailinatorUrl, sustainabilityEmail) // Pass the mailinator URL
            .extractPassword()
            .then(() => {
                cy.get('@dynamicPassword').then((dynamicPassword) => {
                    mailinatorLogin
                        .performSupplierLogin(loginUrl, collabEmail, dynamicPassword)
                        .skipInitialSetup(baseUrl)
                        .navigateToPersonalProfile(baseUrl)
                        .updatePassword(baseUrl, dynamicPassword, sustainabilityPassword);
                });
            });
    });
});

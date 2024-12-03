import { MailinatorLogin } from "../../pages/Mailinator_Login/Mailinator_Login";

describe('Mailinator', function() {
    const mailinatorLogin = new MailinatorLogin();
    let supplierEmail, mailinatorUrl, loginUrl, baseUrl, supplierPassword; 

    before(function() {
        cy.fixture('add_supplier.json').then((data) => {
            supplierEmail = data.email;
            mailinatorUrl = data.mailinatorurl; 
            loginUrl = data.loginurl;
            baseUrl = data.baseurl;
            supplierPassword = data.password;
        });
    });

    it('Use the extracted password for supplier and reset', function () {
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Failed to execute \'send\' on \'WebSocket\': Still in CONNECTING state.') ||
                err.message.includes('Cannot read properties of undefined')) {
                return false;
            }
        });

        mailinatorLogin
            .visitMailinator(mailinatorUrl, supplierEmail) // Pass the mailinator URL
            .extractPassword()
            .then(() => {
                cy.get('@dynamicPassword').then((dynamicPassword) => {
                    mailinatorLogin
                        .performSupplierLogin(loginUrl, supplierEmail, dynamicPassword)
                        .skipInitialSetup(baseUrl)
                        .navigateToPersonalProfile(baseUrl)
                        .updatePassword(baseUrl, dynamicPassword, supplierPassword);
                });
            });
    });
});


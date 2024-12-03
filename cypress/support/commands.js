// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-file-upload';

require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('login', (email="tester_anshul@mailinator.com", password="Test@1234") =>{
    cy.visit('https://frontend.orennow.com/auth/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password)
    cy.get('.css-ye9xn6 > .chakra-button').click()
    
})

Cypress.Commands.add('Reset', () =>{
    cy.visit('https://backend-test.orennow.com/clean/resetTestUser');
})

Cypress.Commands.add('SignOut', () => {
    cy.origin('https://frontend.orennow.com', () => {
        cy.get('#menu-button-\\:Rarjllt6H1\\:').click();
        cy.contains('Sign out').click();
    });
});

Cypress.Commands.add('Signout', () => {
    cy.get('button[id="menu-button-:Rarjllt6H1:"]').click();
    cy.get('button[id="menu-list-:Rarjllt6H1:-menuitem-:Rtaqrjllt6:"]').click();
   
});


// A custom command for handling uncaught exceptions
Cypress.Commands.add('ignoreUncaughtException', () => {
    cy.on('uncaught:exception', (err) => {
        return false;
    });
});

//Utility command for waiting and asserting visibility
Cypress.Commands.add('waitAndGetVisible', (selector, timeout = 10000) => {
    return cy.get(selector, { timeout }).should('be.visible');
});


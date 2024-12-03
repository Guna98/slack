import { CSOAcceptRejectRevert } from "../../pages/Assign_Monthly_Collab/cso_accept_reject_revert";

const CSOAcceptsRejectRevert = new CSOAcceptRejectRevert();

function loginAsCollaborator(data) {
    cy.login(data.collab_assignee_email, data.collab_assignee_password);
}

function loginAsCSO() {
    cy.login();
}

function checkCSOAccess() {
    CSOAcceptsRejectRevert.checkCSOAccess();    
}

// Accept Functionality
describe('CSO Accept/Freeze/Revert Approval Tests', () => {
    beforeEach(function() {
        cy.fixture('assign_monthly_que_collab').as('collabData'); // Load fixture data for reuse
        cy.fixture('assign_monthly_que_collab').then((data) => {
            this.base_url = data.base_url; // Load base_url from fixture
        });
    });

    it('should allow CSO to accept access', function() { 
        cy.log('Starting ReviewerAccept access test');
        loginAsCSO();
        CSOAcceptsRejectRevert
            .click_latest_brsr_report()
            .click_section_c()
            .click_search_question()
            .click_select_question()
            .loopThroughMonthsAndAccept()
            .clickAcceptAndFreeze();
             cy.Signout().then(() => {
               cy.visit(this.base_url);
        });
    });
    it('should check status after collaborator login and accept', function() {
        loginAsCollaborator(this.collabData);
        CSOAcceptsRejectRevert
            .click_view_report()
            .click_select_question()
            //.checkApprovedStatus();
            .loopThroughMonthsAndCheckCollab()
            cy.Signout().then(() => {
               cy.visit(this.base_url);
            });
    });


    it('should allow CSO to freeze data', function() {
        loginAsCSO();
        CSOAcceptsRejectRevert
            .click_latest_brsr_report()
            .click_section_c()
            .click_search_question()
            .click_select_question()
            .checkFreeze();
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

       it('should check status after collaborator login and accept', function() {
        loginAsCollaborator(this.collabData);
        CSOAcceptsRejectRevert
            .click_view_report()
            .click_select_question() 
            .checkAfterFreeze();           
            
            cy.Signout().then(() => {
               cy.visit(this.base_url);
            });
    });


    it('should allow CSO to revert approval', function() {
        loginAsCSO();
        CSOAcceptsRejectRevert
            .click_latest_brsr_report()
            .click_section_c()
            .click_search_question()
            .click_select_question()
            .loopThroughMonthsAndRevertApproval()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

    it('should check status after collaborator login and revert approval', function() {
        loginAsCollaborator(this.collabData);
        CSOAcceptsRejectRevert
            .click_view_report()
            .click_select_question()
            .loopThroughMonthsAndCheckRevertApproval()
                cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

});

//Reject Functionality

describe('CSO Reject/Revert/Send for Review Tests', () => {
    beforeEach(function() {
        cy.fixture('assign_monthly_que_collab').as('collabData'); // Load fixture data for reuse
        cy.fixture('assign_monthly_que_collab').then((data) => {
            this.base_url = data.base_url; // Load base_url from fixture
        });
    });

    it('should allow CSO to Reject', function() { // Changed to a regular function
        cy.log('Starting CSOReject access test');
        loginAsCSO();
        CSOAcceptsRejectRevert
            .click_latest_brsr_report()
            .click_section_c()
            .click_search_question()
            .click_select_question()
            .loopThroughMonthsAndReject()
            .checkRejectStatus()
                cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
        });

    it('should check status after collaborator login and reject', function() {
        loginAsCollaborator(this.collabData);
        CSOAcceptsRejectRevert
            .click_view_report()
            .click_select_question()
            .loopThroughMonthsAndCheckReject()
            .checkSendReview()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

    it('should allow CSO to revert approval', function() {
        loginAsCSO();
        CSOAcceptsRejectRevert
            .click_latest_brsr_report()
            .click_section_c()
            .click_search_question()
            .click_select_question()
            .loopThroughMonthsAndRejectRevertApproval()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

        it('should check status after collaborator login and revert approval', function() {
        loginAsCollaborator(this.collabData);
        CSOAcceptsRejectRevert
            .click_view_report()
            .click_select_question()
            .loopThroughMonthsAndCheckRevertApproval()
                cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

        it('should allow CSO to reject access after revert approval', function() { // Changed to a regular function
        cy.log('Starting CSOReject access test');
        loginAsCSO();
        CSOAcceptsRejectRevert
            .click_latest_brsr_report()
            .click_section_c()
            .click_search_question()
            .click_select_question()
            .loopThroughMonthsAndReject()
            .checkRejectStatus()
                cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
        });

        it('should check status after collaborator login and reject, then send for review', function() { 
            cy.log('Starting ReviewerAccept access test');
            loginAsCollaborator(this.collabData);
            CSOAcceptsRejectRevert
                .click_view_report()
                .click_select_question()
                .loopThroughMonthsAndSendReview()
                .click_send_review_button()
                cy.Signout().then(() => {
                    cy.visit(this.base_url);
            });
        });

        it('should allow CSO to accept/reject after send for review', function() { 
        cy.log('Starting ReviewerAccept access test');
        loginAsCSO();
        CSOAcceptsRejectRevert
            .click_latest_brsr_report()
            .click_section_c()
            .click_search_question()
            .click_select_question()
            .loopThroughMonthsCheckAccess()
             cy.Signout().then(() => {
               cy.visit(this.base_url);
        });
    }); 

})




import { ReviewerAcceptRejectRevert } from "../../pages/Assign_Monthly_Collab/reviewer_accept_reject_rever";

const ReviewersAcceptRejectRevert = new ReviewerAcceptRejectRevert();

function loginAsCollaborator(data) {
    cy.login(data.collab_assignee_email, data.collab_assignee_password);
}

function loginAsReviewer(data) {
    cy.login(data.collab_reviewer_email, data.collab_reviewer_password);
}

//Accept Functionality

describe('Reviewer Accept/Revert Approval Tests', () => {
    beforeEach(function() { 
        cy.fixture('assign_monthly_que_collab').as('collabData'); 
        cy.fixture('assign_monthly_que_collab').then((data) => {
            this.base_url = data.base_url; // Load base_url from fixture
        });
    });

    it('should allow reviewer to accept', function() { 
        cy.log('Starting ReviewerAccept access test');
        loginAsReviewer(this.collabData)
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question_data()
            .loopThroughMonthsAndAccept()
            .clickAcceptAndFreeze()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

    it('should check status after collaborator login and accept', function() {
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question()
            //.checkApprovedStatus();
            .loopThroughMonthsAndCheckCollab()
            cy.Signout().then(() => {
               cy.visit(this.base_url);
            });
    });

    it('should allow Reviewer to revert approval', function() {
        loginAsReviewer(this.collabData)
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question()
            .loopThroughMonthsAndRevertApproval()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

    it('should check status after collaborator login and revert approval', function() {
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question_approval()
            .loopThroughMonthsAndCheckRevertApproval()
                cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });
});


// // Reject Functionality

describe('Reviewer Reject/Revert/Send for Review Tests', () => {
    beforeEach(function() { 
        cy.fixture('assign_monthly_que_collab').as('collabData'); 
        cy.fixture('assign_monthly_que_collab').then((data) => {
            this.base_url = data.base_url; // Load base_url from fixture
        });
    });
    it('should allow reviewer to Reject', function() { // Changed to a regular function
        cy.log('Starting ReviewerAccept access test');
        loginAsReviewer(this.collabData)
        ReviewersAcceptRejectRevert
                .click_view_report()
                .click_select_question_approval()
                .loopThroughMonthsAndReject()
                .checkRejectStatus()
                cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
        });

    it('should check status after collaborator login and reject', function() {
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question()
            .loopThroughMonthsAndCheckReject()
            .checkSendReview()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

    it('should allow Reviewer to revert approval', function() {
        loginAsReviewer(this.collabData)
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question()
            .loopThroughMonthsAndRejectRevertApproval()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

    it('should check status after collaborator login and revert approval', function() {
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question_approval()
            .loopThroughMonthsAndCheckRevertApproval()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

    it('should allow reviewer to Reject after revert approval', function() { // Changed to a regular function
        cy.log('Starting ReviewerAccept access test');
        loginAsReviewer(this.collabData)
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question_approval()
            .loopThroughMonthsAndReject()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

    it('should check status after collaborator login and reject and send for review', function() { 
        cy.log('Starting ReviewerAccept access test');
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question()
            .loopThroughMonthsAndSendReview()
            .click_send_review_button()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
    });

    it('should allow reviewer to accept/reject after send for review', function() { 
        cy.log('Starting ReviewerAccept access test');
        loginAsReviewer(this.collabData)
        ReviewersAcceptRejectRevert
            .click_view_report()
            .click_select_question_data()
            .loopThroughMonthsCheckAccess()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
        })

 })




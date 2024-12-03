import { ReviewerAcceptRejectRevert } from "../../pages/Assign_Annual_Collab/reviewer_accept_reject_revert";

const ReviewersAcceptRejectRevert = new ReviewerAcceptRejectRevert();

function loginAsCollaborator(data) {
    cy.login(data.collab_assignee_email, data.collab_assignee_password);
}

function loginAsReviewer(data) {
    cy.login(data.collab_reviewer_email, data.collab_reviewer_password);
}

function checkReviewerAccess() {
    ReviewersAcceptRejectRevert.checkReviewerAccess();    
}

function checkReviewerAccessUtility() {
    cy.wrap(null).then(() => {
        cy.log('Reviewer has only accept/reject access');
        ReviewersAcceptRejectRevert.hasAccessToAcceptOrReject(true);
        ReviewersAcceptRejectRevert.hasAccessToAcceptOrReject(false);
    });
}

// Accept Functionality

describe('Reviewer Accept/Revert Approval Tests', () => {
    beforeEach(function() {
        cy.fixture('assign_annual_que_collab').as('collabData'); // Load fixture data for reuse
        cy.fixture('assign_annual_que_collab').then((data) => {
            this.base_url = data.base_url; // Load base_url from fixture
        });
    });

    it('should allow reviewer to accept', function() { // Changed to a regular function
        cy.log('Starting ReviewerAccept access test');
        loginAsReviewer(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            //.click_select_question()
            .checkNoEditdataDataAvailable();
            
        checkReviewerAccessUtility();
        checkReviewerAccess();
        ReviewersAcceptRejectRevert.click_accept_button();
        cy.wrap(null).then(() => {
            cy.log('Reviewer has access to Revert Approval and no reject access');
            ReviewersAcceptRejectRevert.checkRevertApprovalAccessAccept(true);
            ReviewersAcceptRejectRevert.checkRevertApprovalAccessAccept(false);
        });
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });

    it('should check status after collaborator login and accept', function() {
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            //.click_select_question()
            .checkApprovedStatus();
    
        cy.wrap(null).then(() => {
            cy.log('Reviewer has No access to Questions');
            checkReviewerAccess();
            ReviewersAcceptRejectRevert.checkNoEditdataDataAvailable();
        });
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });

    it('should allow Reviewer to revert approval', function() {
        loginAsReviewer(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
          //  .click_select_question()
            .click_revert_approval_button();

        checkReviewerAccessUtility();
        checkReviewerAccess();
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });

    it('should check status after collaborator login and revert approval', function() {
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
          //  .click_select_question()
            .checkQuestionApprovalStatus();
    
        cy.wrap(null).then(() => {
            cy.log('Reviewer has No access to Questions');
            checkReviewerAccess();
            ReviewersAcceptRejectRevert.checkEditData();
        });
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });
});

// Reject Functionality

describe('Reviewer Reject/Revert/Send for Review Tests', () => {
    beforeEach(function() {
        cy.fixture('assign_annual_que_collab').as('collabData'); // Load fixture data for reuse
        cy.fixture('assign_annual_que_collab').then((data) => {
            this.base_url = data.base_url; // Load base_url from fixture
        });
    });

    it('should allow reviewer to Reject', function() { // Changed to a regular function
        cy.log('Starting ReviewerAccept access test');
        loginAsReviewer(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
           // .click_select_question()
            .checkQuestionApprovalStatus();
        
        checkReviewerAccessUtility();
        checkReviewerAccess();
        
        cy.wrap(null).then(() => {
            ReviewersAcceptRejectRevert.click_reject_button();
        });

        cy.wrap(null).then(() => {
            cy.log('Reviewer has access to Revert Approval and no accept access');
            ReviewersAcceptRejectRevert.checkRevertApprovalAccessReject(true);
            ReviewersAcceptRejectRevert.checkRevertApprovalAccessReject(false);
        });

        checkReviewerAccess();
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });

    it('should check status after collaborator login and reject', function() {
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            //.click_select_question()
            .checkRejectStatus();

        cy.wrap(null).then(() => {
            cy.log('Collaborator has access to Questions');
            ReviewersAcceptRejectRevert
                .click_csr_applicability(0)
                .click_turnover_question()
                .click_previous_year_turnover()
                .click_net_worth_question()
                .checkCollaboratorAccess();

            cy.wrap(null).then(() => {
                ReviewersAcceptRejectRevert.checkSendReview();
            });
        });
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    }); 

    it('should allow Reviewer to revert approval', function() {
        loginAsReviewer(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            //.click_select_question()
            .click_revert_approval_button();

        checkReviewerAccessUtility();
        checkReviewerAccess();
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });

    it('should check status after collaborator login and revert approval', function() {
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            //.click_select_question()
            .checkQuestionApprovalStatus();
    
        cy.wrap(null).then(() => {
            ReviewersAcceptRejectRevert.checkReviewerAccessAfterRevertApproval();
        });
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });

    it('should allow reviewer to Reject after revert approval', function() { // Changed to a regular function
        cy.log('Starting ReviewerAccept access test');
        loginAsReviewer(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
           // .click_select_question()
            .checkQuestionApprovalStatus();
        
        checkReviewerAccessUtility();
        checkReviewerAccess();
        
        cy.wrap(null).then(() => {
            ReviewersAcceptRejectRevert.click_reject_button();
        });

        cy.wrap(null).then(() => {
            cy.log('Reviewer has access to Revert Approval and no accept access');
            ReviewersAcceptRejectRevert.checkRevertApprovalAccessReject(true);
            ReviewersAcceptRejectRevert.checkRevertApprovalAccessReject(false);
        });

        checkReviewerAccess();
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });
        
    it('should check status after collaborator login and reject and send for review', function() {
        loginAsCollaborator(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
            //.click_select_question()
            .checkRejectStatus();
        
        cy.wrap(null).then(() => {
            cy.log('Collaborator has access to Questions');
            ReviewersAcceptRejectRevert
                .click_csr_applicability(0)
                .click_turnover_question()
                .click_previous_year_turnover()
                .click_net_worth_question()
                .checkCollaboratorAccess();

            cy.wrap(null).then(() => {
                ReviewersAcceptRejectRevert.click_send_review_button();
            });
        });
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });

    it('should allow reviewer to accept/reject after send for review', function() { // Changed to a regular function
        cy.log('Starting ReviewerAccept access test');
        loginAsReviewer(this.collabData);
        ReviewersAcceptRejectRevert
            .click_view_report()
          //  .click_select_question()
            .checkNoEditdataDataAvailable();
                        
        checkReviewerAccessUtility();
        checkReviewerAccess(); 
        cy.Signout().then(() => {
            cy.visit(this.base_url); // Ensure base_url is visited after signout
        });
    });
});

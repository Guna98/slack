import { CSOAcceptRejectRevert } from "../../pages/Assign_Annual_Collab/cso_accept_reject_revert";

const CSOacceptrejectrevert = new CSOAcceptRejectRevert();


function loginAsCollaborator(data) {
    cy.login(data.collab_assignee_email, data.collab_assignee_password);
}


function loginAsCSO() {
    cy.login();
}

function checkCSOAccess() {
    CSOacceptrejectrevert.checkCSOAccess();    
}
function checkCSOAccessUtility() {
    cy.wrap(null).then(() => {
        cy.log('CSO has only accept/reject access');
        CSOacceptrejectrevert.hasAccessToAcceptOrReject(true);
        CSOacceptrejectrevert.hasAccessToAcceptOrReject(false);
    });
}


describe('CSO Accept/Freeze/Revert Approval Tests', () => {
    beforeEach(function() {
        cy.fixture('assign_annual_que_collab').as('collabData'); // Load fixture data for reuse
        cy.fixture('assign_annual_que_collab').then((data) => {
            this.base_url = data.base_url; // Load base_url from fixture
        });
    });

    it('should allow CSO to accept access', function() {
        cy.log('Starting CSO Accept access test');
        loginAsCSO();
        CSOacceptrejectrevert
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question()
            .checkNoFreezedataDataAvailable();

        checkCSOAccessUtility();
        checkCSOAccess();
        CSOacceptrejectrevert.click_accept_button();
        cy.wrap(null).then(() => {
            cy.log('CSO has access to Revert Approval and no reject access');
        CSOacceptrejectrevert.checkRevertApprovalAccessAccept(true)
        CSOacceptrejectrevert.checkRevertApprovalAccessAccept(false)
        cy.Signout().then(() => {
            cy.visit(this.base_url);
        });
        })
    });

    it('should check status after collaborator login and accept', function() {
        loginAsCollaborator(this.collabData);
        CSOacceptrejectrevert
            .click_view_report()
            .click_select_question()
            .checkApprovedStatus()

        cy.wrap(null).then(() => {
            cy.log('Collaborator has No access to Questions')
            checkCSOAccess()
            CSOacceptrejectrevert.checkNoEditDataAccess()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
        });
    });

    it('should allow CSO to freeze data', function() {
        loginAsCSO();
        CSOacceptrejectrevert
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question()
            .click_freeze_data_button()
            .checkCompleteStatus();

        cy.wrap(null).then(() => {
            cy.log('CSO has no accept/reject access')
            CSOacceptrejectrevert.hasNoAccessToAcceptOrReject()
        });
        

        checkCSOAccess()
        cy.Signout().then(() => {
            cy.visit(this.base_url);
        });
    });

    it('should check status after collaborator login and freeze data', function() {
        loginAsCollaborator(this.collabData);
        CSOacceptrejectrevert
            .click_view_report()
            //.click_select_question()
            .checkCompletedStatus()

        cy.wrap(null).then(() => {
            cy.log('Collaborator has No access to Questions')
            checkCSOAccess()
            CSOacceptrejectrevert.checkNoEditDataAccess()
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
        });
    });

    it('should allow CSO to revert approval', function() {
        loginAsCSO();
        CSOacceptrejectrevert
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question()
            .click_unfreeze_data_button()
            cy.wrap(null).then(() => {
                CSOacceptrejectrevert.click_revert_approval_button();
            })

        checkCSOAccessUtility()
        checkCSOAccess()
        cy.Signout().then(() => {
            cy.visit(this.base_url);
        });
    });

    it('should check status after collaborator login and revert approval', function() {
        loginAsCollaborator(this.collabData);
        CSOacceptrejectrevert
            .click_view_report()
            .click_select_question()
            .checkQuestionApprovalStatus();

        cy.wrap(null).then(() => {
            cy.log('Collaborator has No access to Questions');
            checkCSOAccess();
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
        });
});
});


// // Reject Functionality

describe('CSO Reject/Revert/Send for Review Tests', () => {
    beforeEach(function() {
        cy.fixture('assign_annual_que_collab').as('collabData'); // Load fixture data for reuse
        cy.fixture('assign_annual_que_collab').then((data) => {
            this.base_url = data.base_url; // Load base_url from fixture
        });
    });

    it('should allow CSO to reject access', function() {
        loginAsCSO();
        CSOacceptrejectrevert
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question()
        
        checkCSOAccessUtility();
        checkCSOAccess();
        
        cy.wrap(null).then(() => {
            CSOacceptrejectrevert.click_reject_button();
        })

        cy.wrap(null).then(() => {
            cy.log('CSO has access to Revert Approval and no accept access');
            CSOacceptrejectrevert.checkRevertApprovalAccessReject(true);
            CSOacceptrejectrevert.checkRevertApprovalAccessReject(false);
        });

        cy.Signout().then(() => {
            cy.visit(this.base_url);
        });
    });

    it('should check status after collaborator login and reject', function() {
        loginAsCollaborator(this.collabData);
        CSOacceptrejectrevert
            .click_view_report()
           // .click_select_question()
            .checkRejectStatus();

        cy.wrap(null).then(() => {
            cy.log('Collaborator has access to Questions');
            CSOacceptrejectrevert
                .click_csr_applicability(0)
                .click_turnover_question()
                .click_previous_year_turnover()
                .click_net_worth_question()
                .checkCollaboratorAccess();

            cy.wrap(null).then(() => {
                CSOacceptrejectrevert.checkSendReview();
                cy.Signout().then(() => {
                    cy.visit(this.base_url);
                });
            });
        });
    });

    it('should allow CSO to revert approval', function() {
        loginAsCSO();
        CSOacceptrejectrevert
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question()
            .click_revert_approval_button();

        checkCSOAccessUtility();
        checkCSOAccess();
        cy.Signout().then(() => {
            cy.visit(this.base_url);
        });
    });

    it('should check status after collaborator login and revert approval', function() {
        loginAsCollaborator(this.collabData);
        CSOacceptrejectrevert
            .click_view_report()
            .click_select_question()
            .checkQuestionApprovalStatus();

        cy.wrap(null).then(() => {
            cy.log('Collaborator has No access to Questions');
            checkCSOAccess();
            CSOacceptrejectrevert.checkEditData();
            cy.Signout().then(() => {
                cy.visit(this.base_url);
            });
        });
    });

    it('should allow CSO to reject access after revert approval', function() {
        loginAsCSO();
        CSOacceptrejectrevert
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question()
            .click_reject_button();

        cy.wrap(null).then(() => {
            cy.log('CSO has only accept/reject access');
            CSOacceptrejectrevert.checkRevertApprovalAccessReject(true);
            CSOacceptrejectrevert.checkRevertApprovalAccessReject(false);
        });

        checkCSOAccess();
        cy.Signout().then(() => {
            cy.visit(this.base_url);
        });
    });

    it('should check status after collaborator login and reject, then send for review', function() {
        loginAsCollaborator(this.collabData);
        CSOacceptrejectrevert
            .click_view_report()
            //.click_select_question()
            .checkRejectStatus();

        cy.wrap(null).then(() => {
            cy.log('Collaborator has access to Questions');
            CSOacceptrejectrevert
                .click_csr_applicability(0)
                .click_turnover_question()
                .click_previous_year_turnover()
                .click_net_worth_question()
                .checkCollaboratorAccess();

            cy.wrap(null).then(() => {
                CSOacceptrejectrevert.click_send_review_button();
                cy.Signout().then(() => {
                    cy.visit(this.base_url);
                });
            });
        });
    });

    it('should allow CSO to accept/reject access after sending for review', function() {
        loginAsCSO();
        CSOacceptrejectrevert
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question();

        checkCSOAccessUtility();
        checkCSOAccess();
        cy.Signout().then(() => {
            cy.visit(this.base_url);
        });
    });
});


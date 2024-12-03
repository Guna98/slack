import { AssignAnnualQuestionsCollab } from "../../pages/Assign_Questions_Collab/assign_annual_questions_collab";

const assignQuestionsCollab = new AssignAnnualQuestionsCollab();
describe('Login and Assign Annual Questions To Collaborator', () => {

    beforeEach(() => {
        cy.login();
    });


    it('Assign Annual Questions To Collaborator', () => {
        cy.login();
        assignQuestionsCollab
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question()
            .click_assign_question()
            .select_collaborator_and_assign()
            .select_assignee_by_index(0)
            .select_reviewer_by_index(0)
            .click_return_back()
            .click_cancle_button()
            .click_assign_button()
            .select_assignee_by_index(0)
            
    });

    it('Check the collaborator assignee access and fill the question', () => {
        cy.fixture('assign_annual_que_collab.json').then((collabData) => {
            cy.login(collabData.collab_assignee_email, collabData.collab_assignee_password);

            assignQuestionsCollab
                .click_view_report()
                .click_select_question()
                .click_csr_applicability(0)
                .click_turnover_question()
                .click_previous_year_turnover()
                .click_net_worth_question()
                cy.wrap(null).then(() => {
                    cy.log('Collaborator has access to Questions');
                    assignQuestionsCollab.checkCollaboratorAccess();
                })
                assignQuestionsCollab.hasNoAccessToAcceptOrReject()
                cy.wait(5000)
                assignQuestionsCollab.click_send_review_button()
                cy.wait(2000)
                //.click_edit_button()
        });
        
    });

    it('Login to CSO account and Accept/Reject the response',()=>{
        cy.login();
        assignQuestionsCollab
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question()

            cy.wrap(null).then(() => {
                cy.log('Reviewer has only accept/reject access');
                assignQuestionsCollab.hasAccessToAcceptOrReject(true)
                assignQuestionsCollab.hasAccessToAcceptOrReject(false)
            })
     
            // Check if the reviewer does not have access to edit or fill questions
            assignQuestionsCollab.checkReviewerAccess();
            assignQuestionsCollab
                .click_accept_button()
                .click_reject_button()
                .click_revert_approval_button()
 
    })

    it('Login to Reviewer account and Accept/Reject the response',()=>{
        cy.fixture('assign_annual_que_collab.json').then((collabData) => {
            cy.login(collabData.collab_reviewer_email, collabData.collab_reviewer_password);
            
            assignQuestionsCollab
                .click_view_report()
                .click_select_question()
                cy.wrap(null).then(() => {
                    cy.log('Reviewer has only accept/reject access');
                    assignQuestionsCollab.hasAccessToAcceptOrReject(true)
                    assignQuestionsCollab.hasAccessToAcceptOrReject(false)
                })
         
                // Check if the reviewer does not have access to edit or fill questions
                assignQuestionsCollab.checkReviewerAccess();
                assignQuestionsCollab
                .click_accept_button()
                .click_reject_button()
                .click_revert_approval_button()
                
        });
    })

 });




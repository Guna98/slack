import { FillAnnualQuestionsCollab } from "../../pages/Assign_Annual_Collab/collab_fill_assigned_questions";

const FillQuestionsCollab = new FillAnnualQuestionsCollab();
describe('Login and Fill Annual Questions To Collaborator', () => {
    it('Check the collaborator assignee access and fill the question', () => {
        cy.fixture('assign_annual_que_collab.json').then((collabData) => {
            cy.login(collabData.collab_assignee_email, collabData.collab_assignee_password);

            FillQuestionsCollab
                .click_view_report()
               // .click_select_question()
                .checkQuestionStatus()
                
            cy.wrap(null).then(() => {
                cy.log('Collaborator has access to Questions');
                FillQuestionsCollab
                    .click_csr_applicability(0)
                    .click_turnover_question()
                    .click_previous_year_turnover()
                    .click_net_worth_question()
                
                FillQuestionsCollab.checkCollaboratorAccess();
                FillQuestionsCollab.hasNoAccessToAcceptOrReject();
                FillQuestionsCollab.click_send_review_button();
                FillQuestionsCollab.checkQuestionApprovalStatus();
                //FillQuestionsCollab.click_edit_button();
            });
        });
    });

    
});

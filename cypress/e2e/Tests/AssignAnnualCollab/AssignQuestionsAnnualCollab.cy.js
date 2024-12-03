import { AssignAnnualQuestionsCollab } from "../../pages/Assign_Annual_Collab/assign_questions_Collab";

const assignQuestionsCollab = new AssignAnnualQuestionsCollab();
describe('Login and Assign Annual Questions To Collaborator', () => {

    beforeEach(() => {
        cy.login();
    });


    it('Assign Annual Questions To Collaborator', () => {
        assignQuestionsCollab
            .click_latest_brsr_report()
            .click_section_A()
            .click_search_question()
            .click_select_question()
            .checkQuestionStatus()
  
            cy.wrap(null).then(() => {  
                assignQuestionsCollab.click_freeze_data_button()     
                assignQuestionsCollab.checkCSOAccess() 
                assignQuestionsCollab.checkCompleteStatus()
                assignQuestionsCollab.click_freeze_data_button()
                assignQuestionsCollab.click_csr_applicability(0)
                assignQuestionsCollab.click_turnover_question()
                assignQuestionsCollab.click_previous_year_turnover()
                assignQuestionsCollab.click_net_worth_question()
                assignQuestionsCollab.checkAllQuestionAccess()
                assignQuestionsCollab.checkProgressStatus()
})
        assignQuestionsCollab
            .click_assign_question()
            .checkDelegateStatus()
            cy.wrap(null).then(() => {
                assignQuestionsCollab.select_collaborator_and_assign()
                assignQuestionsCollab.select_assignee_by_index(2)
                assignQuestionsCollab.select_reviewer_by_index(3)
                //assignQuestionsCollab.click_return_back()
                //assignQuestionsCollab.click_cancel_button() 
                assignQuestionsCollab.click_assign_button()
                assignQuestionsCollab.click_assign_question()             
                //assignQuestionsCollab.click_edit_assignee() 
                assignQuestionsCollab.checkEditAccess()
                // cy.wrap(null).then(() => {  
                // assignQuestionsCollab.click_cancel_button()
                //})
                
            })
            
    }); 
});

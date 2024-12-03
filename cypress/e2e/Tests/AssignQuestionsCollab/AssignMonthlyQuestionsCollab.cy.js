import {AssignMonthlyQuestionsCollab} from "../../pages/Assign_Questions_Collab/assign_monthly_questions_collab";

const assignMonthlyQuestionsCollab = new AssignMonthlyQuestionsCollab();

describe("Login and Assign Monthly Questions To Collaborator", () => {

    beforeEach(() => {
        cy.login();
    });

    it("Assign Monthly Questions To Collaborator", () => {
        assignMonthlyQuestionsCollab
        .click_latest_brsr_report()
        .click_section_c()
        .click_question()
        .click_essential_indicator_type()   
        .click_search_question()
        .click_select_question()
        .click_assign_question()
        .click_collab_option()
        .click_assignee_options()
        .select_assignee_by_index(1)
        .select_reviewer_by_index(2)
        // .click_return_back()
        // .click_cancle_button()  
        .click_save_button()
    });
}); 

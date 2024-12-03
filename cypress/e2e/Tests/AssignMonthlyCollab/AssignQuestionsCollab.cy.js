import {AssignMonthlyQuestionsCollab} from "../../pages/Assign_Monthly_Collab/assign_questions_collab";

const assignMonthlyQuestionsCollab = new AssignMonthlyQuestionsCollab();

describe("Login and Assign Monthly Questions To Collaborator", () => {

    beforeEach(function() {
        cy.login();
        cy.fixture('assign_monthly_que_collab').then((data) => {
            this.base_url = data.base_url; // Load base_url from fixture
        });
    });

    it("Assign Monthly Questions To Collaborator", () => {
        assignMonthlyQuestionsCollab
        .click_latest_brsr_report()
        .click_section_c()
      //  .click_question()
       // .click_essential_indicator_type()   
        .click_search_question()
        .click_select_question()

        cy.wrap(null).then(() => {
            assignMonthlyQuestionsCollab.click_assign_question()
            assignMonthlyQuestionsCollab.checkDelegateStatus()
        })
        cy.wrap(null).then(() => {
            assignMonthlyQuestionsCollab.click_collab_option()
            assignMonthlyQuestionsCollab.click_assignee_options()
            assignMonthlyQuestionsCollab.select_assignee_by_index(1)
            assignMonthlyQuestionsCollab.select_reviewer_by_index(2)
            // //.click_return_back()
            // //.click_cancle_button() 
            assignMonthlyQuestionsCollab.click_assign_button()
            assignMonthlyQuestionsCollab.click_assign_question()
            assignMonthlyQuestionsCollab.checkEditAccess()
            cy.Signout().then(function() {
                cy.visit(this.base_url);
         });
        })

        // cy.wrap(null).then(() => {

        //     // assignMonthlyQuestionsCollab.click_collab_option()
        //     // assignMonthlyQuestionsCollab.click_assignee_options()
        //     // assignMonthlyQuestionsCollab.select_assignee_by_index(1)
        //     // assignMonthlyQuestionsCollab.select_reviewer_by_index(2)
        //     // //.click_return_back()
        //     // //.click_cancle_button() 
        //     // assignMonthlyQuestionsCollab.click_assign_button()
        // })
        
    });
}); 





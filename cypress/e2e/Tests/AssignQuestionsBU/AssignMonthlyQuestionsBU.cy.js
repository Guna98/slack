import {AssignMonthlyQuestionsBu} from "../../pages/Assign_Questions_BU/assign_monthly_questions_bu";

const assignMonthlyQuestionsBu = new AssignMonthlyQuestionsBu();

describe("Login and Assign Monthly Questions To BU", () => {

    // beforeEach(() => {
      
    // });

    it("Assign Monthly Questions To BU", () => {
        cy.login();
        assignMonthlyQuestionsBu
            .click_latest_brsr_report()
            .select_section_c_general_disclosure()
            .select_principle_question()
            .click_search_question()
            .select_energy_consumption_question()
            .click_assign_question()
           //.click_edit_button()
            .select_bu_radio_button()
            .select_business_units(0)
            .select_assignee_by_index(0)
            .select_reviewer_by_index(1)
            //.click_return_back()
            // .click_cancle_button()
            .click_next_button1()
            //.click_back_button()
            .click_next_button2()
            //.click_reassign_question_button()
            
    });


});
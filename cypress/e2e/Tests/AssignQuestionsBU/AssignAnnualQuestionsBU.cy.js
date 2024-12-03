import { AssignAnnualQuestionsBu } from "../../pages/Assign_Questions_BU/assign_annual_questions_bu";

const assignQuestionsBu = new AssignAnnualQuestionsBu();

describe('Login and Assign Annual Questions To BU', () => {

    // beforeEach(() => {
        
    // });
    
    it('Assign Annual Questions To BU', () => {
        cy.login();
        assignQuestionsBu
            .click_latest_brsr_report()
            .click_section_C()
            .click_search_question()
            .click_select_question()
            .click_assign_question()
            .click_bu_radio_button()
            .select_business_units(0)
            .select_assignee_by_index(0)
            .select_reviewer_by_index(0)
            .click_return_back()
            //.click_cancle_button()
            //.click_assign_button()
    });

    it('Check the BU assignee access and fill the question', () => {
        cy.fixture('assign_annual_que_bu.json').then((buData) => {
            cy.login(buData.Bu_assignee_email, buData.Bu_assignee_password);
            
            assignQuestionsBu
                .click_view_report()
                .click_question1(0)
                .question2_expand()
                .click_question2(0) 
                //assignQuestionsBu.click_edit_button()
                cy.wrap(null).then(() => {
                    cy.log('BU user has access to Questions');
                    assignQuestionsBu.checkBUUserAccess();
                })
                assignQuestionsBu.hasNoAccessToAcceptOrReject()
                assignQuestionsBu.click_send_review()          
                
        });
    });

    // it('Login to CSO account and Accept/Reject the response',()=>{
    //     cy.login();
    //     assignQuestionsBu
    //         .click_latest_brsr_report()
    //         .click_section_C()
    //         .click_search_question()
    //         .click_select_question()
    //         //.click_accept_button()
    //         // .click_reject_button()
    //         //.click_revert_approval_button()
    // });

    it('Login to Reviewer account and Accept/Reject the response',()=>{
        cy.fixture('assign_annual_que_bu.json').then((buData) => {
            cy.login(buData.Bu_reviewer_email, buData.Bu_reviewer_password);

            assignQuestionsBu
                .click_view_report()
                //.click_select_question()
                cy.wrap(null).then(() => {
                    cy.log('Reviewer has only accept/reject access');
                    assignQuestionsBu.hasAccessToAcceptOrReject(true)
                    assignQuestionsBu.hasAccessToAcceptOrReject(false)
                })
            
                // Check if the reviewer does not have access to edit or fill questions
                assignQuestionsBu.checkReviewerAccess(); // New check for reviewer access
                //assignQuestionsBu.click_revert_approval_button();
                //.click_accept_button()
                //.click_reject_button()
                
        });
    });

});

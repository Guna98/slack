import { FillMonthlyQuestionsCollab } from "../../pages/Assign_Monthly_Collab/collab_fill_assigned_questions";

const FillQuestionsCollab = new FillMonthlyQuestionsCollab();

describe('Login and Fill Monthly Questions To Collaborator', () => {
    beforeEach(function() {
        cy.fixture('assign_monthly_que_collab.json').then((collabData) => {
            this.base_url = collabData.base_url; // Load base_url from fixture
        });
    });
    it('Check the collaborator assignee access and fill the question', () => {
        cy.fixture('assign_monthly_que_collab.json').then((collabData) => {
            cy.login(collabData.collab_assignee_email, collabData.collab_assignee_password);
            
            FillQuestionsCollab
                .click_view_report()
                .click_select_question()
            
            cy.wrap(null).then(() => {
                FillQuestionsCollab.loopThroughMonthsAndFreeze()
                FillQuestionsCollab.hasNoAccessToAcceptOrReject()
                FillQuestionsCollab.click_send_review_button()
            cy.Signout().then(function() {
                cy.visit(this.base_url);
         });
 
        });
    });
    });
});



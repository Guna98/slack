import assign_annual_que_collab from '../../../fixtures/assign_annual_que_collab.json';

export class AssignAnnualQuestionsCollab {
    // Selectors
    latest_brsr_report = 'p:contains("BRSR")'
    click_section_A_general_disclosure = '#reportProgressDashOnBoardingTarget1'
    search_question = 'input[placeholder="Search"]'
    select_question = 'p:contains("CSR Details")'
    csr_applicability_question = '#clpkb887q0068vox0no76uzml'
    turnover_question = 'button[data-accordion_button="Turnover (in Rs.)"]'
    enter_turnover_value = '#clo75qh3c000ductcb83le9gl'
    previous_year_turnover = 'p:contains("Previous year turnover (in Rs.)")'
    enter_previous_year_turnover_value = '#clpkbpb5s006hvox00o8z9r6k'
    net_worth_question = 'button[data-accordion_button="Net worth (in Rs.)"]'
    enter_net_worth_value = '#clpkbsfri006lvox0blis1sch'
    assign_question_button = '#ADD_COLLABORATORS'
    collaborator_radio_button = 'div[class="chakra-avatar__group css-6i20ku"]' 
    assignee_options = 'label[class="chakra-radio css-1cqh9jq"]'
    select_assignee = 'div[class="chakra-stack css-1ey9w6j"]'
    select_reviewer_options = 'label[class="chakra-checkbox css-jgy14r"]'
    select_reviewer = 'div[class="chakra-stack css-1ey9w6j"]'
    return_back='p[class="chakra-text css-hlhg4i"]'
    select_cancle_button= 'button[class="chakra-button css-mzy1vu"]'
    select_assign= 'button[class="chakra-button css-18lhp6g"]'
    edit_asginee = 'button:contains("Edit")'

    //collab access locators

    view_report = 'button:contains("View Report")'
    send_review = 'button:contains("Send for review")'
    edit_button = 'button:contains("Edit Data")'
    accept_button = 'button:contains("Accept")'
    reject_button = 'button:contains("Reject")'
    revert_approval_button = 'button:contains("Revert Approval")'



    click_latest_brsr_report() {
        // Find all elements containing "BRSR" text
        cy.contains('p', 'BRSR').then($elements => {
            // If we found any BRSR reports
            if ($elements.length > 0) {
                // Click the first one (assumed to be the most recent)
                cy.wrap($elements.first()).click();
            } else {
                // If no BRSR reports found, log a message
                cy.log('No BRSR reports found');
            }
        });
        return this;
    }

    click_section_A() {
        cy.get(this.click_section_A_general_disclosure).click();
        return this;
    }

    click_search_question() {
        cy.get(this.search_question).type("CSR Details");
        return this;
    }

    click_select_question() {
        cy.get(this.select_question).click({ multiple: true });
        return this;
    }

    click_csr_applicability(index) {
        cy.get(this.csr_applicability_question).select(assign_annual_que_collab.csr_applicability[index]);
        return this;
    }

    click_turnover_question() {
        cy.get(this.turnover_question).click();
        cy.get(this.enter_turnover_value).type(assign_annual_que_collab.turnover_question_value);
        return this;
    }

    click_previous_year_turnover() {
        cy.get(this.previous_year_turnover).click();
        cy.get(this.enter_previous_year_turnover_value).type(assign_annual_que_collab.previous_year_turnover_value);
        return this;
    }

    click_net_worth_question() {
        cy.get(this.net_worth_question).click();
        cy.get(this.enter_net_worth_value).type(assign_annual_que_collab.net_worth_question_value);
        return this;
    }
    click_assign_question() {
        cy.get(this.assign_question_button).click(); // New function to click the "Assign Question" button
        return this;
    }
    select_collaborator_and_assign() {
        cy.get(this.collaborator_radio_button).click(); // Click the collaborator radio button
        return this;
    }

    select_assignee_by_index(index) {
        cy.get(this.select_assignee)
            .find(this.assignee_options)
            .eq(index)
            .click();
        return this;
    }

    select_reviewer_by_index(index) {
        cy.get(this.select_reviewer)
            .find(this.select_reviewer_options)
            .eq(index)
            .click();
        return this;
    }

    click_return_back() {
        cy.get(this.return_back).click();
        return this;
    }

    click_cancle_button() {
        cy.get(this.select_cancle_button).click();
        return this;
    }

    click_assign_button() {
        cy.get(this.select_assign).click();
        return this;
    }

    click_edit_assignee(){
        cy.get(this.edit_asginee).click()
        return this;
    }

    //collab access funtions

    click_view_report(){
        cy.get(this.view_report).then($elements => {
            // If we found any BRSR reports
            if ($elements.length > 0) {
                // Click the first one (assumed to be the most recent)
                cy.wrap($elements.first()).click();
            } else {
                // If no BRSR reports found, log a message
                cy.log('No Report Found');
            }
        });
        return this;
    }

    click_send_review_button(){
        cy.get(this.send_review).click()
        return this;
    }

    click_edit_button(){
        cy.get(this.edit_button).click()
    }

    click_accept_button(){
        cy.get(this.accept_button).click()
        return this;
    }

    click_reject_button(){
        cy.get(this.reject_button).click()
        return this;
    }

    click_revert_approval_button(){
        cy.get(this.revert_approval_button).click()
        return this;
    }

    hasAccessToAcceptOrReject(isAccept) {
        // Check if the specified button (Accept or Reject) is visible
        const buttonSelector = isAccept ? this.accept_button : this.reject_button;
        const message = isAccept ? 'Reviewer has access to Accept' : 'Reviewer has access to Reject';
 
        return cy.get(buttonSelector).then(($button) => {
            const isVisible = $button.is(':visible');
            expect(isVisible, message).to.be.true;
            return isVisible;
        });
    }
 
    hasNoAccessToAcceptOrReject() {
        // Check if the specified button (Accept or Reject) is not visible
        const buttonSelector = [this.accept_button,this.reject_button];
        return cy.get(buttonSelector).then(($button) => {
            const isVisible = $button.is(':visible');
            expect(isVisible, 'Colloborator should not have access to accept and reject').to.be.false; // Expect the button to be not visible
            return !isVisible; // Return the negation of visibility
        });
    }
 
    checkReviewerAccess() {
       
        const elements = [this.enter_turnover_value, this.enter_previous_year_turnover_value, this.enter_net_worth_value];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'Reviewer should not have access to fill data').to.be.false;
            return !areVisible;
        });
    }
 
    // New function to check if the collaborator has access to fill data
    checkCollaboratorAccess() {
        const elements = [this.csr_applicability_question, this.enter_turnover_value, this.enter_previous_year_turnover_value, this.enter_net_worth_value];
        const messages = [
            'Collaborator should have access to fill CSR applicability question',
            'Collaborator should have access to fill turnover value',
            'Collaborator should have access to fill previous year turnover value',
            'Collaborator should have access to fill net worth value'
        ];
 
        return cy.get(elements).then(($els) => {
            const visibilityChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const isVisible = $el.is(':visible');
                    expect(isVisible, messages[index]).to.be.true; // Expect the collaborator to have access
                    return isVisible;
                });
            });
            return Promise.all(visibilityChecks);
        });
    }
}
 



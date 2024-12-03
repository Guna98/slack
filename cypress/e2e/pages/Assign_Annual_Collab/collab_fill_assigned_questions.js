import assign_annual_que_collab from '../../../fixtures/assign_annual_que_collab.json';

export class FillAnnualQuestionsCollab{

    select_question = 'p:contains("CSR Details")'
    csr_applicability_question = '#clpkb887q0068vox0no76uzml'
    turnover_question = 'button[data-accordion_button="Turnover (in Rs.)"]'
    enter_turnover_value = '#clo75qh3c000ductcb83le9gl'
    previous_year_turnover = 'p:contains("Previous year turnover (in Rs.)")'
    enter_previous_year_turnover_value = '#clpkbpb5s006hvox00o8z9r6k'
    net_worth_question = 'button[data-accordion_button="Net worth (in Rs.)"]'
    enter_net_worth_value = '#clpkbsfri006lvox0blis1sch'
    view_report = 'button:contains("View Report")'
    send_review = 'div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    accept_button = 'button:contains("Accept")'
    reject_button = 'button:contains("Reject")'
    revert_approval_button = 'button:contains("Revert Approval")'
    todo_status = 'span:contains("TO DO")'
    approval_status = 'span:contains("NEEDS APPROVAL")'

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
        cy.get(this.enter_turnover_value).clear().type(assign_annual_que_collab.turnover_question_value);
        return this;
    }

    click_previous_year_turnover() {
        cy.get(this.previous_year_turnover).click();
        cy.get(this.enter_previous_year_turnover_value).clear().type(assign_annual_que_collab.previous_year_turnover_value);
        return this;
    }

    click_net_worth_question() {
        cy.get(this.net_worth_question).click();
        cy.get(this.enter_net_worth_value).clear().type(assign_annual_que_collab.net_worth_question_value);
        return this;
    }

    click_send_review_button(){
        cy.get(this.send_review).click();
        cy.wait(3000)
        return this;
    }

    click_edit_button(){
        cy.get(this.edit_button).click()
    }

    hasAccessToAcceptOrReject(isAccept) {
        // Check if the specified button (Accept or Reject) is visible
        const buttonSelector = isAccept ? this.accept_button : this.reject_button;
        const message = isAccept ? 'Colloborator has access to Accept' : 'Colloborator has access to Reject';
 
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
    
    checkQuestionStatus() {
        const elements = [this.todo_status];
        const messages = [
            'TO DO status should be visible for the assigned question',
];
        return cy.get(elements).then(($els) => {
            const visibilityChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const isVisible = $el.is(':visible');
                    expect(isVisible, messages[index]).to.be.true;
                    return isVisible;
                });
            });
            return Promise.all(visibilityChecks);
        });
    }
    checkQuestionApprovalStatus() {
        const elements = [this.approval_status];
        const messages = [
            'Needs Approval status should be visible for the assigned question',
        ];
        return cy.get(elements).then(($els) => {
            const visibilityChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const isVisible = $el.is(':visible');
                    expect(isVisible, messages[index]).to.be.true;
                    return isVisible;
                });
            });
            cy.Signout(); // Ensure this command is defined in your commands file
            return Promise.all(visibilityChecks);
        });
    }

    checkEditButton() {
        const elements = [this.edit_button];
        const messages = [
            'Edit button should be visible for the assigned question',
];
        return cy.get(elements).then(($els) => {
            const visibilityChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const isVisible = $el.is(':visible');
                    expect(isVisible, messages[index]).to.be.true;
                    return isVisible;
                });
            });
            return Promise.all(visibilityChecks);
        });
    }
}




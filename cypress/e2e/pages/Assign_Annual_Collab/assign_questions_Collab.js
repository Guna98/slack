import assign_annual_que_collab from '../../../fixtures/assign_annual_que_collab.json';
export class AssignAnnualQuestionsCollab{
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
    assign_question_button = 'p:contains("Assign Question")'
    collaborator_radio_button = 'div[class="chakra-avatar__group css-6i20ku"]' 
    assignee_options = 'label[class="chakra-radio css-1cqh9jq"]'
    select_assignee = 'div[class="chakra-stack css-1ey9w6j"]'
    select_reviewer_options = 'label[class="chakra-checkbox css-jgy14r"]'
    select_reviewer = 'div[class="chakra-stack css-1ey9w6j"]'
    return_back='p[class="chakra-text css-hlhg4i"]'
    select_cancel_button= 'button[class="chakra-button css-mzy1vu"]'
    select_assign= 'button[class="chakra-button css-qk3wsl"]'
    edit_asginee = 'button[class="chakra-button css-qk3wsl"]'
    freeze_data_button = 'label[class="chakra-switch css-dk4f0j"]'
    edit_data_button = "#markAsCompleteOnBoardingTarget"
    data_unavailable_button = "#markDataAsUnavailableOnBoardingTarget"
    complete_status = 'span:contains("COMPLETED")'
    progress_status = 'span:contains("IN PROGRESS")'
    todo_status = 'span:contains("TO DO")'



    click_latest_brsr_report() {
        cy.wait(5000)
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

    click_freeze_data_button(){
        cy.get(this.freeze_data_button).first().click()
        cy.wait(5000)
        return this;
    }
    
    click_data_unavailable_button(){
        cy.get(this.data_unavailable_button).click()
        return this;
    }

    click_assign_question() {
        cy.wait(5000)
        cy.get(this.assign_question_button).click({ force: true });
        cy.wait(5000);
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

    click_cancel_button() {
        cy.get(this.select_cancel_button).click({force:true});
        return this;
    }

    click_assign_button() {
        cy.wait(5000)
        cy.get(this.select_assign).click({force:true});
        cy.wait(5000)
        return this; 
    }
    click_edit_assignee(){
        cy.get(this.edit_asginee).click()
        return this;
    }
    click_edit_data_button(){
        cy.get(this.edit_data_button).click()
        cy.wait(5000)
        return this;
    }

    click_csr_applicability(index) {
        cy.get(this.csr_applicability_question).select(assign_annual_que_collab.csr_applicability[index]);
        cy.get(this.csr_applicability_question).select(''); 
        return this;
    }
    click_turnover_question() {
        cy.get(this.turnover_question).click();
        cy.get(this.enter_turnover_value).clear().type(assign_annual_que_collab.turnover_question_value).clear();
        return this;
    }

    click_previous_year_turnover() {
        cy.get(this.previous_year_turnover).click();
        cy.get(this.enter_previous_year_turnover_value).clear().type(assign_annual_que_collab.previous_year_turnover_value).clear();
        return this;
    }

    click_net_worth_question() {
        cy.get(this.net_worth_question).click();
        cy.get(this.enter_net_worth_value).clear().type(assign_annual_que_collab.net_worth_question_value).clear();
        return this;
    }

    checkEditAccess() {
        const elements = [this.edit_asginee];
        const messages = [
            'Edit button should be visible',
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

    checkCSOAccess() {
        const elements = [this.enter_turnover_value, this.enter_previous_year_turnover_value, this.enter_net_worth_value, this.complete_status];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'CSO should not have access to fill data ').to.be.false;
            return !areVisible;
        });
    } 
    checkAllQuestionAccess() {
        const elements = [this.csr_applicability_question, this.enter_turnover_value, this.enter_previous_year_turnover_value, this.enter_net_worth_value];
        const messages = [
            'CSO should have access to fill CSR applicability question',
            'CSO should have access to fill turnover value',
            'CSO should have access to fill previous year turnover value',
            'CSO should have access to fill net worth value'
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

    checkCompleteStatus() {
        const elements = [this.complete_status];
        const messages = [
            'Status should get changed to "COMPLETED" for the assigned question',
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

    checkProgressStatus() {
        const elements = [this.progress_status];
        const messages = [
            'Status should get changed to "IN PROGRESS" for the assigned question and Assignee icon should be visible',
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
    checkDelegateStatus() {
        const elements = [this.collaborator_radio_button];
        const messages = [
            'For non delegable questions BU should not be visible and only colloborator should be visible, Collaborator section should have been selected by default for annual question',
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
}

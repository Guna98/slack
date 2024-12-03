import assign_monthly_que_collab from '../../../fixtures/assign_monthly_que_collab.json';

export class AssignMonthlyQuestionsCollab {
    // Selectors
    latest_brsr_report = 'p:contains("BRSR")'
    click_section_c_general_disclosure = 'p:contains("Section C: Principle Wise Performance Disclosure")'
    select_question = 'p:contains("PRINCIPLE 6: Businesses should respect and make efforts to protect and restore the environment")'
    select_essential_indicator_type = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
    search_question = 'input[placeholder="Search"]'
    select_question_waste_generated='p:contains("9a. Waste Generated")'
    assign_question='p:contains("Assign Question")'
    select_collab_option='div[class="css-7zd87k"] span[class="chakra-radio__control css-oe8vkk"]'
    collab_options='span[class="chakra-avatar css-1xkos5i"]'
    assignee_options='label[class="chakra-radio css-1cqh9jq"]'
    select_assignee='div[class="chakra-stack css-1ey9w6j"]'
    select_reviewer_options='label[class="chakra-checkbox css-jgy14r"]'
    select_reviewer='div[class="chakra-stack css-1ey9w6j"]'
    return_back='div[class="css-7zd87k"] span[class="chakra-radio__control css-oe8vkk"]'
    select_cancle_button= 'button[class="chakra-button css-mzy1vu"]'
    select_assign= 'button[class="chakra-button css-18lhp6g"]'

    // Functions
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
    
    click_section_c() {
        cy.get(this.click_section_c_general_disclosure).click();
        return this;
    }

    click_question() {
        cy.get(this.select_question).click();
        return this;
    }

    click_essential_indicator_type() {
        cy.get(this.select_essential_indicator_type).click();
        return this;
    }

    click_search_question() {
        cy.get(this.search_question).type("9a");
        return this;
    }   

    click_select_question() {
        cy.get(this.select_question_waste_generated).click();
        return this;
    }

    click_assign_question() {
        cy.get(this.assign_question).click();
        return this;
    }

    click_collab_option() {
        cy.get(this.select_collab_option).click();
        return this;
    }

    click_assignee_options() {
        cy.get(this.collab_options).click();
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

    click_save_button() {
        cy.get(this.select_assign).click();
        return this;
    }
}
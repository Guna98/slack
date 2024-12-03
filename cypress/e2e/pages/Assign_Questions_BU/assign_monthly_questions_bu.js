import assign_monthly_que_bu from '../../../fixtures/assign_monthly_que_bu.json';
export class AssignMonthlyQuestionsBu {
    // Selectors
    latest_brsr_report = 'p:contains("BRSR")'
    click_section_c_general_disclosure = 'p:contains("Section C: Principle Wise Performance Disclosure")'
    principle_question = 'p:contains("PRINCIPLE 6: Businesses should respect and make efforts to protect and restore the environment")'
    essential_indicator_type = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
    search_question = 'input[placeholder="Search"]'
    energy_consumption_question='p:contains("1. Energy Consumption")'
    assign_question='p:contains("Assign Question")'

    bu_radio_button = 'div[class="css-1xp0arg"] label[class="chakra-radio css-1cqh9jq"]'
    business_unit = 'div[class="chakra-accordion css-x8k3g5"]'
    business_unit_option = 'label[class="chakra-checkbox css-124x3jt"] span[class="chakra-checkbox__control css-1ydjfm6"]'
    

    assignee_options='label[class="chakra-radio css-1cqh9jq"]'
    select_assignee='div[class="chakra-stack css-1ey9w6j"]'
    select_reviewer_options='label[class="chakra-checkbox css-jgy14r"]'
    select_reviewer='div[class="chakra-stack css-1ey9w6j"]'
    return_back='div[class="css-1xp0arg"] label[class="chakra-radio css-1cqh9jq"]'
    select_cancle_button= 'button[class="chakra-button css-mzy1vu"]'
    next_button1 = 'button[class="chakra-button css-18lhp6g"]'
    back_button = 'button[class="chakra-button css-mzy1vu"]'
    next_button2 = 'button[class="chakra-button css-18lhp6g"]'
    edit_button = 'button[class="chakra-button css-18lhp6g"]'
    reassign_question_button = 'button[class="chakra-button css-hxfs4o"]'

    view_report = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)'
    renewable_energy_sources_current_fy = 'button[data-button="Renewable-Energy-Sources-Current-FY"]'
    hydroelectricity_checkbox='div[class="chakra-modal__body css-qlig70"]'
    hydro_checkbox ='label[class="chakra-checkbox css-jgy14r"]'
    close_button = 'button[class="chakra-modal__close-btn css-1ik4h6n"]'

    current_fy= 'input[placeholder="Enter number"]'
    freeze_data='button[class="chakra-button css-19syak6"]'
    unit_options= 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3) > div:nth-child(1) > div:nth-child(1) > select:nth-child(1)'

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
    
    select_section_c_general_disclosure() {
        cy.get(this.click_section_c_general_disclosure).click();
        return this;
    }

    select_principle_question() {
        cy.get(this.principle_question).click();
        return this;
    }

    click_essential_indicator_type() {
        cy.get(this.essential_indicator_type).click();
        return this;
    }

    click_search_question() {
        cy.get(this.search_question).type("Energy Consumption");
        return this;
    }   

    select_energy_consumption_question() {
        cy.get(this.energy_consumption_question).click();
        return this;
    }

    click_assign_question() {
        cy.get(this.assign_question).click();
        return this;
    }

    select_bu_radio_button() {
        cy.get(this.bu_radio_button).click();
        return this;
    }

    select_business_units(index) {
        //const businessUnit = assign_monthly_que_bu.business_unit[index];
        cy.get(this.business_unit_option)
            .eq(index)
            .click()
        return this;
    }   

    select_assignee_by_index(index) {
        const selectedBU = assign_monthly_que_bu.business_unit[index]; // Select based on the provided index
        const assignees = assign_monthly_que_bu[selectedBU].assignee;
        
        if (index < 0 || index >= assignees.length) {
            throw new Error(`Assignee index ${index} is out of range for business unit "${selectedBU}"`);
        }

        const assigneeName = assignees[index];
        
        cy.get(this.select_assignee)
            .find(this.assignee_options)
            .contains(assigneeName)
            .click();
        
        return this;
    }

    select_reviewer_by_index(index) {
        const selectedBU = assign_monthly_que_bu.business_unit[index]; // Select based on the provided index
        const reviewers = assign_monthly_que_bu[selectedBU].reviewers;
        
        if (index < 0 || index >= reviewers.length) {
            throw new Error(`Reviewer index ${index} is out of range for business unit "${selectedBU}"`);
        }

        const reviewerName = reviewers[index];
        
        cy.get(this.select_reviewer)
            .find(this.select_reviewer_options)
            .contains(reviewerName)
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

    click_view_report() {
        cy.get(this.view_report).click();
        return this;
    }

    click_next_button1() {
        cy.get(this.next_button1).click();
        return this;
    }

    click_back_button() {
        cy.get(this.back_button).click();
        return this;
    }

    click_next_button2() {
        cy.get(this.next_button2).click();
        return this;
    }   

    click_edit_button() {
        cy.get(this.edit_button).click();
        return this;
    }

    click_reassign_question_button() {
        cy.get(this.reassign_question_button).click();
        return this;
    }


}

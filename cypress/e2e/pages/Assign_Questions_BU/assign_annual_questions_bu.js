import businessUnits from "../../../fixtures/assign_annual_que_bu.json";

export class AssignAnnualQuestionsBu {
    // Selectors
    latest_brsr_report = 'p:contains("BRSR")'
    select_section_C = 'p:contains("Section C: Principle Wise Performance Disclosure")'
    search_question = 'input[placeholder="Search"]'
    select_question = 'p:contains("2. Performance, Achieve and Trade (PAT) Scheme")'
    
    assign_question_button = '#ADD_COLLABORATORS'
    bu_radio_button = 'div[class="css-1xp0arg"] label[class="chakra-radio css-1cqh9jq"]'
    select_business_unit = 'div[class="chakra-accordion css-x8k3g5"]'
    select_business_unit_option = 'label[class="chakra-checkbox css-124x3jt"] span[class="chakra-checkbox__control css-1ydjfm6"]'
    select_business_unit_sub_option = 'button[data-accordion] label[class="chakra-checkbox css-124x3jt"] span[class="chakra-checkbox__control css-1ydjfm6"]'
    
    assignee_options = 'label[class="chakra-radio css-1cqh9jq"]'
    select_assignee = 'div[class="chakra-stack css-1ey9w6j"]'
    select_reviewer_options = 'label[class="chakra-checkbox css-jgy14r"]'
    select_reviewer = 'div[class="chakra-stack css-1ey9w6j"]'   

    return_back='p[class="chakra-text css-hlhg4i"]'
    select_cancle_button= 'button[class="chakra-button css-mzy1vu"]'
    select_assign= 'button[class="chakra-button css-18lhp6g"]'

    // select_reviewer_name= 'p:contains("India Spoc")'
    // select_reviewer_name_input= 'input[placeholder="Search"]'
    // select_reviewer_name_option= 'p:contains("India Spoc")'
    // select_reviewer_name_option_checkbox= 'input[type="checkbox"]'
    // select_reviewer_name_option_save= 'button[class="chakra-button css-18lhp6g"]'

    view_report = 'button:contains("View Report")'

    //Does the entity have any sites / facilities identified as designated consumers (DCs) under the Performance, 
    //Achieve and Trade (PAT) Scheme of the Government of India?
    question1 = '#clqdlq9go005edikpv7bger93'
    click_question2_expand = 'svg[class="chakra-icon chakra-accordion__icon css-186l2rg"]'
    question2 = '#clqdluhk1005kdikpef3cr4l3'
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


    click_section_C() {
        cy.get(this.select_section_C).click();
        return this;
    }

    click_search_question() {
        cy.get(this.search_question).type("Performance, Achieve and Trade (PAT) Scheme");
        return this;
    }

    click_select_question() {
        cy.get(this.select_question).click();
        return this;
    }    

    click_assign_question() {
        cy.get(this.assign_question_button).click();
        return this;
    }

    click_bu_radio_button() {
        cy.get(this.bu_radio_button).click();
        return this;
    }

    select_business_units(index) {
        const businessUnit = businessUnits.business_unit[index];
        if (!businessUnit) {
            throw new Error(`Business unit at index ${index} not found in the JSON file.`);
        }

        cy.get(this.select_business_unit_option)
            .eq(index)
            .click()
            .then(() => {
                cy.log(`Expanded business unit: ${businessUnit}`);
            });

        return this;
    }

    select_assignee_by_index(index) {
        const selectedBU = businessUnits.business_unit[0]; // Assuming the first selected BU
        const assignees = businessUnits[selectedBU].assignee;
        
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
        const selectedBU = businessUnits.business_unit[0]; // Assuming the first selected BU
        const reviewers = businessUnits[selectedBU].reviewers;
        
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

    click_assign_button() {
        cy.get(this.select_assign).click();
        return this;
    }

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

    click_question1(index){
        cy.get(this.question1).select(businessUnits.option_for_question1[index]);
        return this;
    }

    question2_expand(){
        cy.get(this.click_question2_expand).click();
        return this;
    }

    click_question2(index){
        cy.get(this.question2).select(businessUnits.option_for_question2[index]);
        return this;
    }

    click_send_review(){
        cy.get(this.send_review).click();
        return this;
    }

    click_edit_button(){
        cy.get(this.edit_button).click();
        return this;
    }

    click_accept_button(){
        cy.get(this.accept_button).click();
        return this;
    }


    click_reject_button(){
        cy.get(this.reject_button).click();
        return this;
    }

    click_revert_approval_button(){
        cy.get(this.revert_approval_button).click();
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
            expect(isVisible, 'BU user should not have access to accept and reject').to.be.false; // Expect the button to be not visible
            return !isVisible; // Return the negation of visibility
        });
    }
 
    checkReviewerAccess() {
       
        const elements = [this.question1, this.question2];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'Reviewer should not have access to fill data').to.be.false;
            return !areVisible;
        });
    }
 
    // New function to check if the collaborator has access to fill data
    checkBUUserAccess() {
        const elements = [this.question1, this.question2];
        const messages = [
            'BU user should have access to fill Question 1',
            'BU user should have access to fill Question 2',
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
    


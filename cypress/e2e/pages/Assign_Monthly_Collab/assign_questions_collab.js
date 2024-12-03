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
    collaborator_radio_button = 'div[class="chakra-avatar__group css-6i20ku"]' 
    select_assignee='div[class="chakra-stack css-1ey9w6j"]'
    select_reviewer_options='label[class="chakra-checkbox css-jgy14r"]'
    select_reviewer='div[class="chakra-stack css-1ey9w6j"]'
    return_back='div[class="css-7zd87k"] span[class="chakra-radio__control css-oe8vkk"]'
    select_cancle_button= 'button[class="chakra-button css-mzy1vu"]'
    select_assign_button= 'button[class="chakra-button css-qk3wsl"]'
    todo_status = 'span:contains("TO DO")'
    unitSelector = 'select.chakra-select[id^="clmstpk"]'  // More specific selector
    currentFYInput = 'input[placeholder="Enter number"]'
    bu_radio_button = 'div[class="css-k008qs"]' 
    edit_asginee = 'button[class="chakra-button css-qk3wsl"]'
    edit_assignee ='button[class="chakra-button css-qk3wsl"]'
    assign_question_button = '#ADD_COLLABORATORS'
    plastic_waste_generated = 'p[class="chakra-text css-j34013"]'
    cancel_button = 'button[class="chakra-button css-6vqesk"]'
    

    // Functions
    click_latest_brsr_report() {
        cy.wait(3000);
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
        // Click the essential indicator type, forcing the click even if the element is hidden
        cy.get(this.select_essential_indicator_type).click({ force: true });
        return this;
    }

    click_search_question() {
        cy.get(this.search_question).type("9a");
        return this;
    }   

    scrollDown() {
        // Scroll to the first matching element to ensure it is in view
        cy.get(this.plastic_waste_generated).first().scrollIntoView();
        return this;
    }

    clickCancel(){
        cy.get(this.cancel_button).click()
    }

    click_select_question() {
        this.scrollDown(); // Call the scrollDown function before selecting the question
        cy.get(this.select_question_waste_generated).click();
        cy.wait(3000);
        this.scrollDown();
        cy.wait(3000);
        // Assert that the CSO should have access to fill data for the questions
        const elements = [this.unitSelector, this.currentFYInput];
        const messages = [
            'CSO should have access to fill data for questions',
        ];
        return cy.get(elements).then(($els) => {
            const visibilityChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const isVisible = $el.is(':visible');
                    expect(isVisible, messages[index]).to.be.true; // Expect the elements to not be visible
                    return isVisible;
                });
            });
            return Promise.all(visibilityChecks).then(() => {
                // Check the status of the assigned question
                const statusElements = [this.todo_status];
                const statusMessages = [
                    'TO DO status should be visible for the assigned question',
                ];
                return cy.get(statusElements).then(($statusEls) => {
                    // Check if the status elements exist
                    if ($statusEls.length > 0) {
                        const statusChecks = statusElements.map((statusElement, index) => {
                            return cy.get(statusElement).then(($statusEl) => {
                                const isVisible = $statusEl.is(':visible');
                                expect(isVisible, statusMessages[index]).to.be.true; // Expect the status to be visible
                                return isVisible;
                            });
                        });
                        return Promise.all(statusChecks);
                    } else {
                        // Log a message if the status elements are not found
                        //cy.log('No status elements found, skipping visibility checks.');
                        return Promise.resolve(); // Resolve the promise without performing actions
                    }
                });
            });
        });
    }

    click_assign_question() {
        cy.wait(3000);
        cy.get(this.assign_question).click();
        return this;
    }

    click_collab_option() {
        cy.wait(3000);
        cy.get(this.select_collab_option).click(); // Click the collaborator radio button
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

    click_assign_button() {
        cy.get(this.select_assign_button).click();
        cy.wait(5000);
        return this;
    }

    checkAllQuestionAccess() {
        const elements = [this.unitSelector, this.currentFYInput];
        const messages = [
            'CSO should have access to fill data for questions',
            
        ];
        return cy.get(elements).then(($els) => {
            const visibilityChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const isVisible = $el.is(':visible');
                    // Log the visibility status for debugging
                    cy.log(`Element: ${element}, isVisible: ${isVisible}`);
                    expect(isVisible, messages[index]).to.be.true; // Expect the collaborator to have access
                    return isVisible;
                });
            });
            return Promise.all(visibilityChecks);
            
        });
    }

    checkDelegateStatus() {
        const elements = [this.bu_radio_button];
        const messages = [
            'For monthly question Business Unit should get selected by default',
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

    checkEditAccess() {
        cy.wait(3000);
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
            return Promise.all(visibilityChecks).then(() => {
                cy.wait(3000);
                this.clickSignOut(); // Call clickSignOut after checking edit access
            });
        });
    }

    clickSignOut(){
        cy.get(this.dropdown_button).click();
        cy.wait(2000)
        cy.get(this.signout_button).click();
        return this;
        
    }

    click_assign_questions() {
        cy.get(this.assign_question_button).click();
        cy.wait(5000);
        return this;
    }
}


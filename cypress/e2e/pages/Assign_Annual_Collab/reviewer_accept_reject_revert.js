import assign_annual_que_collab from '../../../fixtures/assign_annual_que_collab.json';


export class ReviewerAcceptRejectRevert{

    view_report = 'button:contains("View Report")'
    select_question = 'p:contains("CSR Details")'
    csr_applicability_question = '#clpkb887q0068vox0no76uzml'
    turnover_question = 'button[data-accordion_button="Turnover (in Rs.)"]'
    enter_turnover_value = '#clo75qh3c000ductcb83le9gl'
    previous_year_turnover = 'p:contains("Previous year turnover (in Rs.)")'
    enter_previous_year_turnover_value = '#clpkbpb5s006hvox00o8z9r6k'
    net_worth_question = 'button[data-accordion_button="Net worth (in Rs.)"]'
    enter_net_worth_value = '#clpkbsfri006lvox0blis1sch'
    accept_button = 'button:contains("Accept")'
    reject_button = 'button:contains("Reject")'
    revert_approval_button = 'button:contains("Revert Approval")'
    freeze_data_button =  'label[class="chakra-switch css-dk4f0j"]'
    send_review = 'div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    data_unavailable_button = 'div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    approval_status = 'span:contains("NEEDS APPROVAL")'
    approved_status = 'span:contains("APPROVED")'
    rejected_status = 'span:contains("REJECTED")'
    edit_data_button = "#markAsCompleteOnBoardingTarget"
    //send_review = 'button:contains("Send for review")'
    edit_button = 'button:contains("Edit Data")'

    click_view_report(){
        cy.wait(2000)
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

    click_section_A() {
        cy.get(this.click_section_A_general_disclosure).click();
        return this;
    }

    // click_search_question() {
    //     cy.get(this.search_question).type("CSR Details");
    //     return this;
    // }

    click_select_question() {
        cy.wait(3000)
        cy.get(this.select_question).click({ multiple: true });
        return this;
    }

    click_accept_button(){
        cy.wait(2000)
        cy.get(this.accept_button).click()

            const elements = [this.approved_status];
            const messages = [
                '"Approved" status should be visible for the assigned question',
    ];
            return cy.get(elements).then(($els) => {
                const visibilityChecks = elements.map((element, index) => {
                    return cy.get(element).then(($el) => {
                        const isVisible = $el.is(':visible');
                        expect(isVisible, messages[index]).to.be.true;
                        return isVisible;
                    });
                });
                cy.wait(2000)
                return Promise.all(visibilityChecks).then(() => {
                    return this;
                });
            });
        }

        click_reject_button(){
            cy.wait(2000)
            cy.get(this.reject_button).click()
                const elements = [this.rejected_status];
                const messages = [
                    '"Rejected" status should be visible for the assigned question',
        ];
                return cy.get(elements).then(($els) => {
                    const visibilityChecks = elements.map((element, index) => {
                        return cy.get(element).then(($el) => {
                            const isVisible = $el.is(':visible');
                            expect(isVisible, messages[index]).to.be.true;
                            return isVisible;
                        });
                    });
                    cy.wait(2000)
                    return Promise.all(visibilityChecks).then(() => {
                        return this; 
                    });
                });
            }

    click_revert_approval_button(){
        cy.wait(5000)
        cy.get(this.revert_approval_button).click();
        cy.wait(2000)
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
            return Promise.all(visibilityChecks).then(() => {
                return this; // Ensure to return 'this' for method chaining
            });
        });
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
            expect(isVisible, 'Reviewer should not have access to accept and reject').to.be.false; // Expect the button to be not visible
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

    checkReviewerAccessAfterRevertApproval() {
        const elements = [this.enter_turnover_value, this.enter_previous_year_turnover_value, this.enter_net_worth_value];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'Asignee should not have access to fill data').to.be.false;
            return !areVisible;
        });
    }

    checkRevertApprovalAccessAccept(isAccept) {
    // Check if the specified button (Revert Approval) is visible
    const buttonSelector = isAccept ? this.revert_approval_button : this.reject_button; // Added missing part
    const message = isAccept ? 'Reviewer has access to Revert Approval after clicking Accept' : 'Reject got disabled to Reviewer after clicking Accept'; 

        return cy.get(buttonSelector).then(($button) => {
            const isVisible = $button.is(':visible');
            expect(isVisible, message).to.be.true;
            return isVisible;
        });
    }
    checkRevertApprovalAccessReject(isAccept) {
        // Check if the specified button (Revert Approval) is visible
        const buttonSelector = isAccept ? this.revert_approval_button : this.accept_button; // Added missing part
        const message = isAccept ? 'Reviewer has access to Revert Approval after clicking Reject' : 'Accept got disabled to Reviewer after clicking Reject'; 

        return cy.get(buttonSelector).then(($button) => {
            const isVisible = $button.is(':visible');
            expect(isVisible, message).to.be.true;
            return isVisible;
        });
    }
    checkQuestionApprovalStatus() {
        const elements = [this.approval_status];
        const messages = [
            'Needs Approval status should be visible foe the assigned question',
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

    checkNoEditdataDataAvailable(){
        const elements = [this.edit_data_button , this.data_unavailable_button ];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'Send for review and Data Unavailable should get disabled to Reviewer').to.be.false;
            return !areVisible;
        });
        
    }

    checkApprovedStatus(){
        cy.wait(2000)
        const elements = [this.approved_status];
        const messages = [
            '"Approved" status should be visible for the assigned question',
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
    checkEditData() {
        const elements = [this.edit_data_button];
        const messages = [
            'Edit Data should should get enabled',
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
    checkRejectStatus() {
        const elements = [this.rejected_status, this.send_review];
        const messages = [
            'Rejected" status should be visible for the assigned question',
            'Send for review should be enabled for the assigned question',
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

    click_csr_applicability(index) {
        cy.wait(2000)
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

    checkSendReview() {
        const elements = [this.send_review];
        const messages = [
            'Send for review should should be enabled',
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

    checkCollaboratorAccess() {
        const elements = [this.csr_applicability_question, this.enter_turnover_value, this.enter_previous_year_turnover_value, this.enter_net_worth_value];
        const messages = [
            'Colloborator should have access to fill CSR applicability question',
            'Colloborator should have access to fill turnover value',
            'Colloborator should have access to fill previous year turnover value',
            'Colloborator should have access to fill net worth value'
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

    click_send_review_button(){
        cy.wait(3000)
        cy.get(this.send_review).click();

        // Define checkEditButton as an inner function
        const checkEditButton = () => {
            const elements = [this.approval_status];
            const messages = [
                'Needs Approval status should be visible for the assigned question',
            ];
            return cy.get(elements).then(($els) => {
                cy.wait(3000)
                const visibilityChecks = elements.map((element, index) => {
                    return cy.get(element).then(($el) => {
                        const isVisible = $el.is(':visible');
                        expect(isVisible, messages[index]).to.be.true;
                        return isVisible;
                    });
                });
                cy.wait(3000)
                return Promise.all(visibilityChecks);
            });
        };

        checkEditButton(); 
    }
}

 






 


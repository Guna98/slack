import assign_annual_que_collab from '../../../fixtures/assign_annual_que_collab.json';

export class CSOAcceptRejectRevert{

    latest_brsr_report = 'p:contains("BRSR")'
    view_report = 'button:contains("View Report")'
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
    accept_button = 'button:contains("Accept")'
    reject_button = 'button:contains("Reject")'
    revert_approval_button = 'button:contains("Revert Approval")'
    freeze_data_button =  'label[class="chakra-switch css-dk4f0j"]'
    unfreeze_data_button = 'div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    send_review = 'div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    data_unavailable_button = 'div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    edit_button = 'button:contains("Edit Data")'
    approval_status = 'span:contains("NEEDS APPROVAL")'
    approved_status = 'span:contains("APPROVED")'
    rejected_status = 'span:contains("REJECTED")'
    edit_data_button = "#markAsCompleteOnBoardingTarget"
    complete_status = 'span:contains("COMPLETED")'
    dropdown_button = 'button[id="menu-button-:Rarjllt6H1:"]'
    signout_button = 'button[id="menu-list-:Rarjllt6H1:-menuitem-:Rtaqrjllt6:"]'

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
        cy.wait(3000)
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
    click_accept_button(){
        cy.wait(2000)
        cy.get(this.accept_button).click()
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
        cy.get(this.revert_approval_button).click()
        cy.wait(3000)
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

    click_freeze_data_button(){
        cy.get(this.freeze_data_button).click()
        return this;
    }

    click_unfreeze_data_button(){
        cy.get(this.unfreeze_data_button).click()
        return this;
    }

    click_data_unavailable_button(){
        cy.get(this.data_unavailable_button).click()
        return this;
    }

    click_edit_data_button() {
        cy.get(this.edit_data_button).click();
        cy.wait(2000);
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
            return Promise.all(visibilityChecks).then(() => {
                return this; // Ensure to return 'this' for method chaining
            });
        });
    }

    hasAccessToAcceptOrReject(isAccept) {
        // Check if the specified button (Accept or Reject) is visible
        const buttonSelector = isAccept ? this.accept_button : this.reject_button;
        const message = isAccept ? 'CSO has access to Accept' : 'CSO has access to Reject';
 
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
            expect(isVisible, 'CSO should not have access to accept and reject').to.be.false; // Expect the button to be not visible
            return !isVisible; // Return the negation of visibility
        });
    }
 
    checkCSOAccess() {
       
        const elements = [this.enter_turnover_value, this.enter_previous_year_turnover_value, this.enter_net_worth_value];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'CSO should not have access to fill data').to.be.false;
            return !areVisible;
        });
    }   

    checkRevertApprovalAccessAccept(isAccept) {
        // Check if the specified button (Revert Approval) is visible
        const buttonSelector = isAccept ? this.revert_approval_button : this.reject_button; // Added missing part
        const message = isAccept ? 'CSO has access to Revert Approval after clicking Accept' : 'Reject got disabled to CSO after clicking Accept'; 

        return cy.get(buttonSelector).then(($button) => {
            const isVisible = $button.is(':visible');
            expect(isVisible, message).to.be.true;
            return isVisible;
        });
    }
    checkRevertApprovalAccessReject(isAccept) {
        // Check if the specified button (Revert Approval) is visible
        const buttonSelector = isAccept ? this.revert_approval_button : this.accept_button; // Added missing part
        const message = isAccept ? 'CSO has access to Revert Approval after clicking Reject' : 'Accept got disabled to CSO after clicking Reject'; 

        return cy.get(buttonSelector).then(($button) => {
            const isVisible = $button.is(':visible');
            expect(isVisible, message).to.be.true;
            return isVisible;
        });
    }

    checkNoFreezedataDataAvailable(){
        const elements = [this.freeze_data_button , this.data_unavailable_button ];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'Freeze Data and Data Unavailable should get disabled to CSO').to.be.false;
            return !areVisible;
        });
        
    }

    checkQuestionApprovalStatus() {
        cy.wait(3000)
        const elements = [this.approval_status];
        const messages = [
            '"Needs Approval" status should be visible for the assigned question',
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
            return Promise.all(visibilityChecks);
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

    checkNoEditDataAccess() {
        const elements = [this.enter_turnover_value, this.enter_previous_year_turnover_value, this.enter_net_worth_value, this.complete_status];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'User should not have access to Send for review ').to.be.false;
            return !areVisible;
        });
    } 

    click_freeze_data_button(){
        cy.get(this.freeze_data_button).first().click()
        cy.wait(5000)
        return this;
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

    checkEditDataButton() {
        const elements = [this.edit_data_button];
        const messages = [
            'Edit Data should should get enabled once after clicking Freeze Data',
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

    checkCompletedStatus(){
        const elements = [this.complete_status];
        const messages = [
            'Completed" status should be visible for the assigned question',

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
        const elements = [this.edit_data_button, this.send_review];
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

    hasNoAccessToAcceptOrReject() {
        // Check if the specified button (Accept or Reject) is not visible
        const buttonSelector = [this.accept_button,this.reject_button];
        return cy.get(buttonSelector).then(($button) => {
            const isVisible = $button.is(':visible');
            expect(isVisible, 'CSO should not have access to accept and reject').to.be.false; // Expect the button to be not visible
            return !isVisible; // Return the negation of visibility
        });
    }

    checkEditData() {
        const elements = [this.freeze_data_button];
        const messages = [
            'User should have access to Freeze Data',
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

    click_send_review_button(){
        cy.wait(3000)
        cy.get(this.send_review).click();
        cy.wait(3000)

        // Define checkEditButton as an inner function
        const checkEditButton = () => {
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
                cy.wait(3000)
                return Promise.all(visibilityChecks);
            });
        };

        checkEditButton(); 
    }

clickSignOut(){
    cy.get(this.dropdown_button).click();
    cy.wait(2000)
    cy.get(this.signout_button).click();
    return this;
    
}
}

 




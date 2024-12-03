//import assign_monthly_que_collab from '../../../fixtures/assign_monthly_que_collab.json';

export class ReviewerAcceptRejectRevert{

    view_report = 'button:contains("View Report")'
    select_question = 'p:contains("PRINCIPLE 6: Businesses should respect and make efforts to protect and restore the environment")'
    select_question_waste_generated='p:contains("9a. Waste Generated")'
    monthSelector = 'div[class="css-z2llg0"]'
    freezeDataButton = 'div[class="css-lxebfo"] div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__track css-p27qcy"]'
    unitSelector = 'select.chakra-select[id^="clmstpk"]'  // More specific selector
    currentFYInput = 'input[placeholder="Enter number"]'
    popup_freezeDataButton= 'button[class="chakra-button css-qk3wsl"]'
    hazardous_waste_current_fy_question = 'button[id="accordion-button-:rqq:"] p[class="chakra-text css-1egnydr"]'
    hazardous_waste_question_tab = 'button[id="accordion-button-:rqj:"] div[class="css-m7zxlc"]'
    hazardous_waste_question_tab = 'button[id="accordion-button-:rqj:"] div[class="css-m7zxlc"]'
    send_for_review_button ='div[class="css-1ew2o3k"] div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    hazardous_waste_previous_fy_question = 'button[data-accordion_button="Other Hazardous Waste (G) Previous FY-RP-MN-2024-4"]'
    addMoreButton = 'div[id="clxmrbdnw003y8xwas1cckg3u-RP-MN-2024-4"] button[class="chakra-button css-yc7ed"]:contains("Add More")'
    addMoreButton_2 = 'div[class="chakra-accordion__panel css-1inji5u"] button[class="chakra-button css-yc7ed"]:contains("Add More")'
    removeLastButton = 'button[class*="chakra-button"][aria-label="remove"]:last'
    confirm_delete_row_from_all_months ='button[class="chakra-button css-18lhp6g"]'
    currentFYInput_2 = 'input[id="clqm61gog00rgdikpwxyr0qpv"]'
    accept_button = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)'
    reject_button = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)'
    revert_button = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)'
    reverts_button = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)'

    //revert_approval_button = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)'
    revert_approval_button = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)'
    popup_freezeDataButton= 'button[class="chakra-button css-qk3wsl"]'
    freeze_data_button = 'div[class="css-lxebfo"] div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__track css-p27qcy"]'
    data_unavailable_button = "#markDataAsUnavailableOnBoardingTarget"
    approval_status = 'span:contains("NEEDS APPROVAL")'
    approved_status = 'span:contains("APPROVED")'
    rejected_status = 'span:contains("REJECTED")'
    edit_data_button = 'div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    send_review = 'div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    edit_button = 'div[id="markAsCompleteOnBoardingTarget"] span[class="chakra-switch__thumb css-7roig"]'
    dropdown_button = "svg[stroke='currentColor'][fill='currentColor'][stroke-width='0'][viewBox='0 0 320 512']"
    annual_accepts_button = 'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)'
    plastic_waste_generated = 'p[class="chakra-text css-j34013"]'
    
    click_view_report(){
        cy.wait(3000)
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

    click_select_question_data() {
        cy.get(this.select_question_waste_generated).click({ multiple: true });
        this.checkNoFreezeDataDataAvailable();
        cy.wait(3000)
        return this;
    }
    click_select_question() {
        cy.get(this.select_question_waste_generated).click({ multiple: true });
        cy.wait(3000)
        return this;
    }

    click_select_question_approval() {
        cy.get(this.select_question_waste_generated).click({ multiple: true });
        //this.checkQuestionNeedsApprovalStatus();
        cy.wait(3000)
        return this;
    }

    click_accept_button(){
        cy.wait(2000)
        //cy.get(this.accept_button).scrollIntoView().debug(); // Inspect the button before clicking
        cy.get(this.accept_button).click({ force: true })
        cy.wait(3000)
        return this;
        }

    selectMonth(targetMonth) {
        // Click the month
        cy.get(this.monthSelector).contains(targetMonth).click({force: true});
        
        // Wait for a short time to allow the UI to update
        cy.wait(10000);

        // Verify that the month is selected by checking for the new class
        //cy.get(this.monthSelector).contains(targetMonth).should('have.class', 'div[class="css-nbs6ed"]');
        //cy.wait(10000);
        return this;
    }

    selectMonth(targetMonth) {
        // Click the month
        cy.get(this.monthSelector).contains(targetMonth).click();
        
        // Wait for a short time to allow the UI to update
        cy.wait(500);

        return this;
    }

    shiftMonth(direction) {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.get(this.monthSelector).filter('.selected-month-class').invoke('text').then((currentMonth) => {
            let currentIndex = months.indexOf(currentMonth);
            let targetIndex;

            if (direction === 'next') {
                targetIndex = (currentIndex + 1) % months.length;
            } else if (direction === 'previous') {
                targetIndex = (currentIndex - 1 + months.length) % months.length;
            } else {
                throw new Error("Invalid direction. Use 'next' or 'previous'.");
            }

            this.selectMonth(months[targetIndex]);
        });

        return this;
    }


    loopThroughMonthsAndAccept() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            this.checkReviewerAccess();
            this.hasAccessToAcceptOrReject();
            this.checkQuestionNeedsApprovalStatus();
            cy.get(this.accept_button).click();
            this.checkRevertApprovalAccessAccept();
            cy.wait(1000);
        });

        return this;
    }

    loopThroughMonthsCheckAccess() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            this.checkReviewerAccess();
            this.hasAccessToAcceptOrReject();
            this.checkQuestionNeedsApprovalStatus();
            cy.wait(1000);
        });

        return this;
    }

    loopThroughMonthsAndCheckCollab() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            this.checkReviewerAccess();
            cy.wait(1000);
        });

        return this;
    }
    loopThroughMonthsAndRevertApproval() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            this.click_reverted_approval_button();
            this.hasAccessToAcceptOrReject();
            this.checkReviewerAccess();
            cy.wait(1000);
        });

        return this;
    }

    loopThroughMonthsAndRejectRevertApproval() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            this.click_reverted_approvals_button();
            this.hasAccessToAcceptOrReject();
            this.checkReviewerAccess();
            cy.wait(4000);
        });

        return this;
    }

    loopThroughMonthsAndCheckRevertApproval() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            this.checkQuestionNeedsApprovalStatus();
            this.checkReviewersAccess();
            this.checkEditData();
            cy.wait(5000);
        });

        return this;
    }

    loopThroughMonthsAndReject() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            this.checkReviewerAccess();
            this.hasAccessToAcceptOrReject();
            this.checkQuestionNeedsApprovalStatus();
            cy.get(this.reject_button).click();
            this.checkRevertApprovalAccessReject();
            //this.checkRejectStatus();
            cy.wait(1000);
        });

        return this;
    }

    loopThroughMonthsAndCheckReject() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            // this.checkQuestionNeedsApprovalStatus();
            // cy.get(this.reject_button).click();
            this.checkRejectStatus();
            //this.checkAllQuestionAccess();
            cy.wait(1000);
        });

        return this;
    }

    loopThroughMonthsAndSendReview() {
        const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
        
        cy.wrap(months).each((month) => {
            // Select the month
            this.selectMonth(month);
            
            if (month === 'Apr') {
                //this.checkAllQuestionAccess();
                //cy.get(this.tab_open).click({ multiple: true, force: true });
                cy.wait(3000);
                this.fillAprilData();
                cy.wait(5000);
                cy.get(this.popup_freezeDataButton).click();
                cy.wait(5000);
                this.checkQuestionNeedsApprovalStatus();
            } else {
                cy.wait(10000);
                cy.get(this.freezeDataButton).should('be.visible').and('not.be.disabled').then($buttons => {
                    // If there are multiple buttons, click the first visible one
                    if ($buttons.length > 1) {
                        cy.wrap($buttons).filter(':visible').first().click();
                    } else {
                        // If there's only one button, click it
                        cy.wrap($buttons).click();
                        this.checkQuestionNeedsApprovalStatus();
                    }
                });
            }
        });

        // Wait for UI to update
        cy.wait(5000);
        
        return this;
    }

    fillAprilData() {
        cy.wait(3000);
        cy.get(this.plastic_waste_generated).first().scrollIntoView();
        cy.wait(3000);
        // Select 'Kilogram' from the unit dropdown
        cy.get(this.unitSelector).should('exist').then($selects => {
            if ($selects.length > 1) {
                cy.wrap($selects).filter(':visible').first().select('3', { force: true });
            } else {
                cy.wrap($selects).select('3', { force: true });
            }
        });

        // Enter a value in the Current FY input
        const randomValue = Math.floor(Math.random() * 1000) + 1;
        cy.get(this.currentFYInput).should('exist').should('be.visible').then($inputs => {
            if ($inputs.length > 1) {
                cy.wrap($inputs).filter(':visible').first().clear({ force: true }).type(randomValue.toString(), { force: true });
            } else {
                cy.wrap($inputs).clear({ force: true }).type(randomValue.toString(), { force: true });
            }
        });
    cy.get(this.freezeDataButton).click();
        return this;
    }

    click_send_review_button(){
        cy.wait(3000)
        cy.get(this.send_for_review_button).click();
        cy.wait(3000)

        // Define checkEditButton as an inner function
        const checkEditButton = () => {
            const elements = [this.edit_button];
            const messages = [
                'user should have access to edit data for the assigned question in the selected month',
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
        };

        // Call the checkEditButton function
        checkEditButton();
        cy.wait(5000);
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

    click_reverted_approval_button(){
        cy.wait(5000)
        cy.get(this.revert_button).click();
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

    click_reverted_approvals_button(){
        cy.wait(5000)
        cy.get(this.reverts_button).click();
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

    click_reverted_approvals_button(){
        cy.wait(5000)
        cy.get(this.reverts_button).click();
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

    
    checkNoFreezeDataDataAvailable(){
        cy.wait(3000)
        const elements = [this.freeze_data_button, this.data_unavailable_button];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'Freeze Data and Data Unavailable should get disabled to Reviewer').to.be.false;
            return !areVisible;
            
        });
    }

    checkReviewerAccess() {
        const elements = [this.unitSelector, this.currentFYInput, this.hazardous_waste_current_fy_question, this.freeze_data_button, this.data_unavailable_button];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'Reviewer should not have access to fill data for the assigned question in the selected month').to.be.false;
            return !areVisible;
        });
    }
    checkReviewersAccess() {
        const elements = [this.unitSelector, this.currentFYInput, this.hazardous_waste_current_fy_question, this.freeze_data_button, this.data_unavailable_button];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, 'Collaborator should not have access to fill data for the assigned question in the selected month and Collaborator can unfreeze and edit data').to.be.false;
            return !areVisible;
        });
    }

    hasAccessToAcceptOrReject() {

            const elements = [this.accept_button, this.reject_button];
            const messages = [
                'Reviewer has access to Accept for the assigned question in the selected month',
                'Reviewer has access to Reject for the assigned question in the selected month',
            ];
            return cy.get(elements).then(($els) => {
                const existenceChecks = elements.map((element, index) => {
                    return cy.get(element).then(($el) => {
                        const exists = $el.length > 0; // Check if the element exists
                        expect(exists, messages[index]).to.be.true; // Expect the element to exist
                        return exists;
                    });
                });
                return Promise.all(existenceChecks);
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

    checkReviewerAccessAfterRevertApproval() {
        const elements = [this.unitSelector, this.currentFYInput, this.hazardous_waste_current_fy_question];
        return cy.get(elements).then(($els) => {
            const areVisible = $els.is(':visible');
            expect(areVisible, '').to.be.false;
            return !areVisible;
        });
    }

    checkRevertApprovalAccessAccept() {
    // Check if the specified button (Revert Approval) is visible
    const elements = [this.revert_approval_button , this.reject_button]; // Added missing part
    const messages = [
            'Reviewer has access to Revert Approval after clicking Accept for the assigned question in the selected month' ,
            'Reject got disabled to Reviewer after clicking Accept for the assigned question in the selected month',
        ]; 
        return cy.get(elements).then(($els) => {
            const existenceChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const exists = $el.length > 0; // Check if the element exists
                    expect(exists, messages[index]).to.be.true; // Expect the element to exist
                    return exists;
                });
            });
            return Promise.all(existenceChecks);
        });
    }

    checkRevertApprovalAccessReject() {
        // Check if the specified button (Revert Approval) is visible
        const elements = [this.revert_approval_button , this.accept_button]; // Added missing part
        const messages = [
             'Reviewer has access to Revert Approval after clicking Reject for the assigned question in the selected month',
             'Accept got disabled to Reviewer after clicking Reject for the assigned question in the selected month'
        ]; 

        return cy.get(elements).then(($els) => {
            const existenceChecks = elements.map((element, index) => {
                return cy.get(element).then(($el) => {
                    const exists = $el.length > 0; // Check if the element exists
                    expect(exists, messages[index]).to.be.true; // Expect the element to exist
                    return exists;
                });
            });
            return Promise.all(existenceChecks);
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

    click_send_for_review_button(){
        cy.get(this.send_for_review_button).click();
        return this;
        
    
}

checkQuestionNeedsApprovalStatus() {
    cy.wait(3000)
    const elements = [this.approval_status];
    const messages = [
        '"Needs Approval" status should be visible for the assigned question in the selected month',

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

checkEditData() {
    const elements = [this.edit_data_button];
    const messages = [
        'user should have access to click on send for review for the assigned question in the selected month',
];
    return cy.get(elements).then(($els) => {
    const existenceChecks = elements.map((element, index) => {
        return cy.get(element).then(($el) => {
            const exists = $el.length > 0; // Check if the element exists
            expect(exists, messages[index]).to.be.true; // Expect the element to exist
            return exists;
        });
    });
    return Promise.all(existenceChecks);
});
}

hasAccessToAcceptOrReject() {

    const elements = [this.accept_button, this.reject_button];
    const messages = [
        'Reviewer has access to Accept for the assigned question in the selected month',
        'Reviewer has access to Reject for the assigned question in the selected month',
    ];
    return cy.get(elements).then(($els) => {
        const existenceChecks = elements.map((element, index) => {
            return cy.get(element).then(($el) => {
                const exists = $el.length > 0; // Check if the element exists
                expect(exists, messages[index]).to.be.true; // Expect the element to exist
                return exists;
            });
        });
        return Promise.all(existenceChecks);
    });
}

checkRejectStatus() {
    const elements = [this.rejected_status];
    const messages = [
        'Rejected" status should be visible for the assigned question',
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

checkRejectedStatus() {
    cy.get(this.plastic_waste_generated).first().scrollIntoView();
    const elements = [this.rejected_status, this.unitSelector, this.currentFYInput];
    const messages = [
        'Rejected" status should be visible for the assigned question',
        'Reviewer should have access to fill data for the assigned question in the selected month',
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

clickAcceptAndFreeze(){
    //cy.get(this.dropdown_button).click();
    // cy.get(this.annual_accepts_button).click();
    // cy.wait(5000)
    cy.get(this.freeze_data_button).click();
    cy.wait(5000)
    return this;    
}   

checkAllQuestionAccess() {
    cy.get(this.plastic_waste_generated).first().scrollIntoView();
    cy.wait(5000);
    const elements = [this.unitSelector, this.currentFYInput];
    const messages = [
        'Reviewer should have access to fill data for the assigned question in the selected month',
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
        // Ensure to return the promise of all visibility checks
        return Cypress.Promise.all(visibilityChecks);
    });
}
}
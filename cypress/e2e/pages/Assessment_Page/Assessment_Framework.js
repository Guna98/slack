import frameworkdata from '../../../fixtures/assessment_framework.json';
import {selectDate} from '../../../utils/dateUtils'

export class AssessmentFrameworks {
    assessment_button = 'div[id="assessment"]'
    add_assessment_button = 'button[class="chakra-button chakra-menu__menu-button css-1xyv3x9"]'
    click_framework = 'button[class="chakra-menu__menuitem css-bs3hpn"]'
    select_framework = 'select[name="reporting_framework_id"]'
    select_date = 'select[data-select="data-start-date"]'
    assessment_due_date='#data-due-date'
    audit_due_date='#audit-due-date'
    assign_auditor = 'select[name="customer_auditor_id"]'
    business_criticality = ':nth-child(7) > .chakra-form-control > .css-1aesbrt > .css-79elbk > .css-1ozk2d > .css-hfbj6y > .css-165y24o'
    click_picksupplier = '#supplier-category-label'
    pick_supplier = ':nth-child(8) > .chakra-form-control > .css-1aesbrt > .css-79elbk > .css-1ozk2d > .css-hfbj6y > .css-165y24o'
    view_suppliers = '.css-6leoay > .chakra-button'
    close_button = '.chakra-modal__close-btn'
    send_supplier = '.css-1ayfwcb > .chakra-button'

    clickAssessment(){
        cy.get(this.assessment_button).click()
        return this
    }
    addAssessment(){
        cy.wait(2000)
        cy.get(this.add_assessment_button).click()
        return this
    }
    clickFramework(){
        cy.get(this.click_framework).click()
        return this
    }
    selectFramework(index){
        cy.get(this.select_framework).select(frameworkdata.frameworks[index])
        return this
    }
    SelectDate(index) {
        cy.get(this.select_date).select(frameworkdata.dates[index]);
        return this;
    }
    SelectAssessmentDueDate(){
        cy.get(this.assessment_due_date).clear().then(($input) => {
            selectDate(frameworkdata.due_date.month, frameworkdata.due_date.year, frameworkdata.due_date.day, $input);
        })
        return this
    }
    SelectAuditDueDate(){
        cy.get(this.audit_due_date).clear().then(($input) => {
            selectDate(frameworkdata.audit_date.month, frameworkdata.audit_date.year, frameworkdata.audit_date.day, $input);
        })
        return this;
    }
    SelectAuditor(index) {
        cy.get(this.assign_auditor).select(frameworkdata.auditors[index]);
        return this;
    }
    SelectBusinessCriticality(index){
        cy.get(this.business_criticality).click() 
        cy.contains(frameworkdata.business[index]).click() 
        cy.get(this.click_picksupplier).click()
        return this;
    }
    SelectSupplier(index){
        cy.get(this.pick_supplier).click() 
        cy.contains(frameworkdata.picksupplier[index]).click() // Click on the specific supplier
        cy.get(this.click_picksupplier).click()
        return this;
    }
    clickViewSuppliers(){
        cy.get(this.view_suppliers).click()
        cy.wait(2000)
        cy.get(this.close_button).click()
        return this;
    }
    clickSend(){
        cy.get(this.send_supplier).click()
        return this;
    }
}


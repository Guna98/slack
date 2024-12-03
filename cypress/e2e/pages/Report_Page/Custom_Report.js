import materialTopicData from '../../../fixtures/custom_report.json'
import { selectDate } from '../../../utils/dateUtils'

export class CustomReports {
    add_customreport = "#tabs-\\:r0\\:--tab-1"
    add_report = "#tabs-\\:r0\\:--tabpanel-1 > .css-1lapgov > .chakra-button"
    add_material = 'div[id="select-material-topic"]'
    return_back_from_dropdown = '.css-18euh9p'
    select_date = 'select[data-select="data_start_date"]'
    report_name = '#report-name'
    due_date = '#data-due-date'
    audit_date = '#audit-due-date'
    auditor_type = 'select[data-select="select-auditor"]'
    save_report = 'Create Report'
    cancel_report = '.css-1ukhg9t'
    
    clickCustomReport() {
        cy.get(this.add_customreport).click()
        cy.wait(3000)
        return this
    }
    
    SelectAddReport() {
        cy.get(this.add_report).click()
        return this
    }
    
    addMaterialTopic(index){
        cy.get(this.add_material).click().type(materialTopicData.material_topics[index])
        cy.get(this.add_material).type('{downArrow}{enter}')
        cy.get(this.add_material).click()
        return this

   }
    
    SelectDate(index) {
        cy.get(this.select_date).select(materialTopicData.dates[index])
        return this
    }
    
    SelectReportName(index) {
        cy.get(this.report_name).clear().type(materialTopicData.report_name[index])
        return this
    }
    clickDueDate(){
        cy.get(this.due_date).clear().then(($input) => {
            selectDate(materialTopicData.due_date.month, materialTopicData.due_date.year, materialTopicData.due_date.day, $input);
        })
        return this
    }
    clickAuditDueDate(){
        cy.get(this.audit_date).clear().then(($input) => {
            selectDate(materialTopicData.audit_date.month, materialTopicData.audit_date.year, materialTopicData.audit_date.day, $input);
        })
        return this
    }
    SelectAuditor(index) {
        cy.get(this.auditor_type).select(materialTopicData.auditors[index])
        return this
    }
    
    clickSave() {
        cy.contains(this.save_report).click()
        return this
    }
    
    clickCancel() {
        cy.get(this.cancel_report).click()
        return this
    }
}
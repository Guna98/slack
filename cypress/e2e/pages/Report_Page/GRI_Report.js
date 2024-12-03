import grireportData from '../../../fixtures/gri_report.json';
import {selectDate} from '../../../utils/dateUtils'

export class GRIReports {
    add_report = "#tabs-\\:r0\\:--tabpanel-0 > .css-1lapgov > .chakra-button"
    select_framework =  'select[data-select="select-framework"]'
    select_date = 'select:contains("Data start date")'
    report_name = '#report-name'
    report_due_date = '#data-due-date'
    audit_due_date = '#audit-due-date'
    auditor_type = 'select[data-select="select-auditor"]'
    save_report = '.css-d356ty'
    cancel_report = '.css-1ukhg9t'
    
    clickAddReport() {
        cy.get(this.add_report).click()
        cy.wait(3000)
        return this
    }
    
    SelectFramework(index) {
        cy.get(this.select_framework).select(grireportData.frameworks[index]);
        return this;
    }

    SelectDate(index) {
        cy.get(this.select_date).select(grireportData.dates[index]);
        return this;
    }

    SelectReportName(index) {
        cy.get(this.report_name).clear().type(grireportData.report_name[index]);
        return this;
    }

    SelectReportDueDate(){
        cy.get(this.report_due_date).clear().then(($input) => {
            selectDate(grireportData.report_due_date.month, grireportData.report_due_date.year, grireportData.report_due_date.day, $input);
        })
        return this;
    }

    SelectAuditDueDate(){
        cy.get(this.audit_due_date).clear().then(($input) => {
            selectDate(grireportData.audit_due_date.month, grireportData.audit_due_date.year, grireportData.audit_due_date.day, $input);
        })
        return this;
    }

    SelectAuditor(index) {
        cy.get(this.auditor_type).select(grireportData.auditors[index]);
        return this;
    }

    clickSave() {
        cy.get(this.save_report).click()
        return this
    }

    clickCancel() {
        cy.get(this.cancel_report).click()
        return this
    }
}


import reportData from '../../../fixtures/brsr_report.json';
import {selectDate} from '../../../utils/dateUtils'

export class AddBRSR2023 {
    add_report = "#tabs-\\:r0\\:--tabpanel-0 > .css-1lapgov > .chakra-button"
    select_framework = 'select[data-select="select-framework"]'
    select_subframework = 'select[data-select="select-sub-framework"]'
    select_date = 'select:contains("Data start date")'
    report_name = '#report-name'
    report_due_date = '#data-due-date'
    audit_due_date = '#audit-due-date'
    auditor_type = 'select[data-select="select-auditor"]'
    save_report = 'button[class="chakra-button css-ttihb0"]'
    cancel_report = '.css-1ukhg9t'

    clickAddReport() {
        cy.get(this.add_report).click()
        cy.wait(3000)
        return this
    }

    SelectFramework(index) {
        cy.get(this.select_framework).select(reportData.frameworks[index]);
        return this;
    }

    SelectSubFramework(index) {
        cy.get(this.select_subframework).select(reportData.subFrameworks[index]);
        return this;
    }

    SelectDate(index) {
        cy.get(this.select_date).select(reportData.dates[index]);
        return this;
    }

    SelectReportDueDate(){
        cy.get(this.report_due_date).clear().then(($input) => {
            selectDate(reportData.report_due_date.month, reportData.report_due_date.year, reportData.report_due_date.day, $input);
        })
        return this;
    }

    SelectAuditDueDate(){
        cy.get(this.audit_due_date).clear().then(($input) => {
            selectDate(reportData.audit_due_date.month, reportData.audit_due_date.year, reportData.audit_due_date.day, $input);
        })
        return this;
    }
    
    SelectAuditor(index) {
        cy.get(this.auditor_type).select(reportData.auditors[index]);
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

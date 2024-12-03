import { GRIReports } from '../../pages/Report_Page/GRI_Report'

const AddGRIReport = new GRIReports()

describe('Login and Add GRI Report', function() {
    beforeEach(() => {
        cy.login();
    })

    it('Add GRI Report', () => {
        AddGRIReport
            .clickAddReport()
            .SelectFramework(0)  // Index 0 for 'GRI'
            .SelectDate(1)  // Index 3 for '01/01/2024'
            .SelectReportName(0)
            .SelectReportDueDate()
            .SelectAuditDueDate()
            .SelectAuditor(0)  // Index 0 for 'Auditor'
            // .clickSave()
            // .clickCancel()
    })
});
import {CustomReports} from '../../pages/Report_Page/Custom_Report'

const customReport = new CustomReports();

describe('Login and Add Custom Report', function() {

    beforeEach(() => {
        // Using the custom command for login
        cy.login();
    });

    it('Add Custom Report', () => {
    
        customReport
            .clickCustomReport()
            .SelectAddReport()
            .addMaterialTopic(2)  // Selects "Biodiversity" and "Water"
            .SelectDate(2)            // Selects "01/01/2023"
            .SelectReportName(0)
            .clickDueDate()
            .clickAuditDueDate()
            .SelectAuditor(0)         // Selects "Auditor"
            
            //.clickSave();
            //.clickCancel();
            
    });

});
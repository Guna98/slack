import {AddBRSR2023} from '../../pages/Report_Page/Add_BRSR_Report'

const AddBRSRReport = new AddBRSR2023()

describe('Login and Add BRSR Report', function(){

    // Login 
    beforeEach(() => {
        // Using the custom command for login
        cy.login();
    })
    // afterEach(()=>{
    //     cy.SignOut()
    // })
    it('Adds BRSR Report',()=> {
        AddBRSRReport
            .clickAddReport()
            .SelectFramework(0)  // Index 1 for 'BRSR'
            .SelectSubFramework(0)  // Index 0 for 'Comprehensive'
            .SelectDate(0)  // Index 2 for '01/01/2023'
            .SelectReportDueDate()
            .SelectAuditDueDate()
            .SelectAuditor(0)  // Index 0 for 'Auditor'
            .clickSave()
            // .clickCancel()   
            
    })
    
      });
      

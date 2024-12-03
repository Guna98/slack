import { AssessmentFrameworks } from "../../pages/Assessment_Page/Assessment_Framework";

const assessmentframework = new AssessmentFrameworks()

describe('Login and Add Assessment Framework', function() {
    // Login 
    beforeEach(() => {
        // Using the custom command for login
        cy.login();
    });
    // afterEach(()=>{
    //     cy.SignOut()
    // });

    it('Add Assessment Framework',()=> {
        assessmentframework
            .clickAssessment()
            .addAssessment()
            .clickFramework()
            .selectFramework(1)
            .SelectDate(1)
            .SelectAssessmentDueDate()
            .SelectAuditDueDate()
            .SelectAuditor(0)
            .SelectBusinessCriticality(1)
            .SelectSupplier(1)
            .clickViewSuppliers()
          //  .clickSend()
            
    })
    
});
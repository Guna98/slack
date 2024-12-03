import { AddAssessmentMaterialTopic } from "../../pages/Assessment_Page/Add_Assessment_MaterialTopic"

const AddAssessment= new AddAssessmentMaterialTopic()

describe('Login and Add Assessment Material Topic', () => {

    beforeEach(() => {
        cy.login();
    });

    it('Add Assessment Material Topic', () => {     
        AddAssessment
            .clickLogo()
            .clickAssessment()
            .clickAddAssessment()
            .clickMaterialTopics()
            .selectMaterialTopic(0) // Select the first option (index 0)
            .selectDate(1) // Select the first option (index 0)
            .selectAssessmentDueDate() // Select the first option (index 0)
            .selectAuditDueDate() // Select the first option (index 0)
            .selectAuditor(0) // Select the first option (index 0)
            .selectBusinessCriticality(0) // Select the first option (index 0)
            .selectSupplierCategory(0) // Select multiple options (indices 0, 1, and 2)
            .clickViewSupplier()
            .clickCloseView()
            
            //.clickSendAssessment()
    });
});                                         
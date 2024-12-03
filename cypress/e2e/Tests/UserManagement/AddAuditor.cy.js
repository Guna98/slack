import { UserManagement } from "../../pages/User_Management/UserManagement";
import { Add_Auditor } from "../../pages/User_Management/Add_Auditor";

const add_auditor = new Add_Auditor()
const usermanagement = new UserManagement

describe('Login and Add Auditor', function(){

    beforeEach(() => {
        // Using the custom command for login
        cy.login();
    }); 

    it('Add Auditor',()=> {
        usermanagement
                    .navigateToUserManagementPage()
                    .navigateToAuditorPage()
        add_auditor
                    .addAuditorBtn()
                    .auditorName()
                    .auditorEmail()
                    .auditorMobile()
                    .clickSubmit();
        cy.contains('Auditor added successfully').should('be.visible');
    
    })
})
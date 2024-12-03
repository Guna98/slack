import { UserManagement } from "../../pages/User_Management/UserManagement";
import {Add_STMember} from "../../pages/User_Management/Add_STMember";


const usermanagement = new UserManagement();
const add_stmember = new Add_STMember();


describe('Login and Add Sustainability Team Member', function(){

    beforeEach(() => {
        // Using the custom command for login
        cy.login();
    }); 

    it('Add Sustainability Team Member',()=> {
        usermanagement
                .navigateToUserManagementPage()
                .navigateToMyCompanyPage()
        add_stmember
                .navigateToByUserPage()
                .addCollaboratorBtn()
                .userName()
                .userMobile()
                .userEmail()
                .selectRole()
                .selectDepartment(3)
                .clickSubmit();
    })
})
import { AddCollaborators } from "../../pages/User_Management/Add_Collaborators";
import { UserManagement } from "../../pages/User_Management/UserManagement";


const add_collaborators = new AddCollaborators();
const usermanagement = new UserManagement();


describe('Login and Add Collaborator', function() {
    beforeEach(() => {
        cy.login();
    });


    it('Add Collaborator', () => {
        usermanagement
                .navigateToUserManagementPage()
                .navigateToMyCompanyPage()

        add_collaborators
                .navigateToByUserPage()
                .addCollaboratorBtn()
                .collaboratorName()
                .collaboratorMobile()
                .collaboratorEmail()
                .selectRole()
                .collaboratorBusinessUnit(0) 
                .collaboratorDepartment(2)
                //.clickSubmit();
    });
    });
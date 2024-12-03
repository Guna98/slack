import stData from '../../../fixtures/stmember_data.json';

export class Add_STMember {
    by_user_page = 'select:contains("By User")'
    add_collab_btn = 'Add Collaborator'
    sustainability_name = '#fulltName'
    sustainability_name_mail = '#email'
    sustainability_mobile = "#phoneNumber"
    select_role = 'select[name="role"]'
    sustainability_department = 'select[name="department"]'
    submit = 'button[type="submit"]'

    navigateToByUserPage(){
        cy.get(this.by_user_page).select('By User');
            return this;
        }
    addCollaboratorBtn() {
        cy.contains(this.add_collab_btn).click();
        return this;
     }
    userName() {
       cy.get(this.sustainability_name).type(stData.userName);
       return this;
    }
    userEmail() {
        cy.get(this.sustainability_name_mail).type(stData.userEmail);
        return this;
    }
    userMobile(){
        cy.get(this.sustainability_mobile).type(stData.userMobileNo);
        return this;
    }
    selectRole(){
        cy.get(this.select_role).select('Sustainability Team'); 
        return this; 
    }
    selectDepartment(index) {
        cy.get(this.sustainability_department).select(stData.Department[index]);
        return this;
    }
    clickSubmit(){
        cy.get(this.submit).click();
    }

}

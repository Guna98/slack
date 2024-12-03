import collabData from '../../../fixtures/collab_data.json'; 


export class AddCollaborators {
        by_user_page = 'select:contains("By User")'
        add_collab_btn = 'Add Collaborator'
        collab_name = '#fulltName'
        collab_mail = '#email'
        collab_mobile = "#phoneNumber"
        select_role = '#role'
        collab_businessUnit = 'select:contains("Mumbai")'
        collab_department = 'select[name="department"]'
        submit = 'button[type="submit"]'

    navigateToByUserPage(){
            cy.get(this.by_user_page).select('By User');
            return this;
        }
    addCollaboratorBtn() {
       cy.contains(this.add_collab_btn).click();
       return this;
    }
    collaboratorName() {
       cy.get(this.collab_name).type(collabData.collabName);
       return this;
    }
    collaboratorMobile() {
        cy.get(this.collab_mobile).type(collabData.collabMobileNo);
        return this;
    }
    collaboratorEmail() {
        cy.get(this.collab_mail).type(collabData.email);
        return this;
    }
    
    selectRole() {
        cy.get(this.select_role).select('COLLABORATOR');
        return this;
    }
    collaboratorBusinessUnit(index) {
        const businessUnit = collabData.collabBusinessUnit[index];
        cy.get(this.collab_businessUnit).then($select => {
            const options = $select.find('option');
            const matchingOption = Array.from(options).find(option => 
                option.text.includes(businessUnit) // Match partial or full value
            );
            if (matchingOption) {
                cy.wrap($select).select(matchingOption.value);
            }
        });
        return this;
    };
    collaboratorDepartment(index) {
        cy.get(this.collab_department).select(collabData.collabDepartment[index]);
        return this;
    }
    clickSubmit(){
        cy.get(this.submit).click();
    }

}

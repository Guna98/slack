import reviewerData from '../../../fixtures/reviewer_data.json'; 


export class AddReviewer {
        by_user_page = 'select:contains("By User")'
        add_collab_btn = 'Add Collaborator'
        reviewer_name = '#fulltName'
        reviewer_mail = '#email'
        reviewer_mobile = "#phoneNumber"
        select_role = '#role'
        reviewer_department = 'select[name="department"]'
        submit = 'button[type="submit"]'

    navigateToByUserPage(){
            cy.get(this.by_user_page).select('By User');
            return this;
        }
    addCollaboratorBtn() {
       cy.contains(this.add_collab_btn).click();
       return this;
    }
    reviewerName() {
       cy.get(this.reviewer_name).type(reviewerData.reviewerName);
       return this;
    }
    reviewerMobile() {
        cy.get(this.reviewer_mobile).type(reviewerData.reviewerMobileNo);
        return this;
    }
    reviewerEmail() {
        cy.get(this.reviewer_mail).type(reviewerData.email);
        return this;
    }
    
    selectRole() {
        cy.get(this.select_role).select('Sustainability Team');
        return this;
    }
    reviewerDepartment(index) {
        cy.get(this.reviewer_department).select(reviewerData.reviewerDepartment[index]);
        return this;
    }
    clickSubmit(){
        cy.get(this.submit).click();
    }

}
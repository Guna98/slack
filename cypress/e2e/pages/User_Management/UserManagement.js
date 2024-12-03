export class UserManagement {
    user_management = '#user-management'
    my_company = 'My Company'
    suppliers = 'Suppliers'
    auditors = 'Auditors'


    navigateToUserManagementPage() {
        cy.get(this.user_management).click();
        return this
    }

    navigateToMyCompanyPage() {
        cy.contains(this.my_company).click();
        return this
    }
    navigateToSupplierPage() {
        cy.contains(this.suppliers).click();
        return this
    }   
    navigateToAuditorPage() {
        cy.contains(this.auditors).click();
        return this
    }
}



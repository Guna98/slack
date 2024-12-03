import { AddSupplier } from "../../pages/User_Management/Add_Suppliers";

const addsupplier = new AddSupplier()

describe('Login and Add Supplier', function() {
    beforeEach(() => {
        cy.login();
    });

    it('Add Supplier', () => {
        addsupplier
            .clickLogo()
            .clickUserManagment()
            .clickSupplierButton()
            .addSupplier()
            .enterCompanyName()
            .selectCountryOfIncorporation(3)
            .enterPANno()
            .selectBusinessCriticality(1)
            .selectFinancialYearCycle()
            .selectAnnualSpend()
            .selectSupplierCategory()
            .selectNameOfSpoc()
            .addDesignation()
            .enterEmail()
            .enterMobileNumber()
            .enterAddress()
            .enterWebsite()
            .clickSave()
            //.clickCancel()
    })
})


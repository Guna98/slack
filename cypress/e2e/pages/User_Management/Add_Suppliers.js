import addSupplier from '../../../fixtures/add_supplier.json';

export class AddSupplier{
    logo_img = '.css-1pmp3sx'
    user_managment = '#user-management > .chakra-link'
    click_supplier_button = 'Suppliers'
    add_supplier = 'Add Supplier'
    enter_company_name = 'input[name="company_name"]'
    country_of_incorporation = '#country_of_incoporation'
    PAN_No = '#identification_number'
    business_criticality = '#business_criticality'
    financial_year_cycle = ':nth-child(6) > .css-1aesbrt > .css-79elbk > .css-1ozk2d > .css-hfbj6y > .css-165y24o'
    select_financial_year_cycle = '#financial_year_cycle'
    select_finacial_year = "#financial_year_cycle-label"
    annaul_spendclick = 'Annual Spend'
    annual_spend = "#financial_year01\\/04\\/2024" 
    supplier_category = '#supplier_category'
    //add_category = '.css-1xa1gs2'
    back_supplier = '#supplier_category-label'
    name_spoc = '#name_spoc'
    add_designation = '#designation'
    enter_email ='#email'
    enter_mobilenumber = '#mobile_number'
    enter_address ='#full_address'
    enter_website='#website'
    //click_save = ".css-42l4cn"
    click_save = "button[class='chakra-button css-16srs3c']"
    click_cancel = ".css-ez23ye"

    clickLogo(){
        cy.get(this.logo_img).click()
        return this
    }
    clickUserManagment(){
        cy.get(this.user_managment).click()
        return this
    }
    clickSupplierButton(){
        cy.wait(1000)
        cy.contains(this.click_supplier_button).click()
        return this
    }
    addSupplier(){
        cy.contains(this.add_supplier).click()
        return this
    }
    enterCompanyName(){
        cy.wait(1000)
        cy.get(this.enter_company_name).type(addSupplier.company_name); 
        return this
    }
    selectCountryOfIncorporation(index){
        cy.get(this.country_of_incorporation).select(index)
        // cy.get(this.select_location).select()
        return this
    }
    enterPANno(){
        cy.get(this.PAN_No).type(addSupplier.pan_no); 
        return this
    }
    selectBusinessCriticality(index){
        cy.get(this.business_criticality).select(index)
        return this
    }
    selectFinancialYearCycle(){
        cy.get(this.financial_year_cycle).click()
        cy.get(this.select_financial_year_cycle).type('Jan')
        cy.get(this.select_financial_year_cycle).type('{downArrow}{enter}')
        cy.get(this.financial_year_cycle).click()
        return this
    }
    selectAnnualSpend(){
        cy.get(this.annual_spend).type(addSupplier.annual_spend); 
        return this
    }
    selectSupplierCategory(){
        cy.get(this.supplier_category).click() 
        cy.get(this.supplier_category).type('{downArrow}{enter}')
        cy.get(this.back_supplier).click()
        return this
    }
    selectNameOfSpoc(){
        cy.get(this.name_spoc).type(addSupplier.spoc_name); 
        return this
    }
    addDesignation(){
        cy.get(this.add_designation).type(addSupplier.designation); 
        return this
    }
    enterEmail(){
        cy.get(this.enter_email).type(addSupplier.email);
        return this;
    }
    
    enterMobileNumber(){
        cy.get(this.enter_mobilenumber).type(addSupplier.mobile_number); 
        return this
    }
    enterAddress(){
        cy.get(this.enter_address).type(addSupplier.address); 
        return this
    }
    enterWebsite(){
        cy.get(this.enter_website).type(addSupplier.website); 
        return this
    }
    clickSave(){
        cy.get(this.click_save).click()
        return this
    }
    clickCancel(){
        cy.get(this.click_cancel).click()
    }
}
import { businessUnits } from "../../pages/User_Management/Business_Units";
import buData from '../../../fixtures/business_unit.json';


const businessunit = new businessUnits()

describe('Login and Add Business Unit', function(){

    // Login 
    beforeEach(() => {
        // Using the custom command for login
        cy.login();
    });
    
    // Add Auditor 
    it('Add Business Unit',()=> {
        const countryIndexes = [1, 2]; // Add more indexes as needed

        businessunit
        .clickUserManagement()
        
        for (let i = 0; i < buData.businessUnit_name.length; i++) {
            const countryIndex = countryIndexes[i % countryIndexes.length]; // Cycle through country indexes
            businessunit
            .clickAddBusinessUnit()
            .enterBusinessUnitName(i)
            .SelectCountry(countryIndex)
            //.SelectLocation(1)
            .clickOnAdd()
            //businessunit.clickClose()
            for (let j = 0; j < 2; j++) {
                businessunit
                    .clickAddUser(i)
                    .enterName(i * 2 + j)
                    .enterEmail(i * 2 + j)
                    .enterMobile(i * 2 + j)
                    .businessUnitDepartment(i * 2 + j)
                    .clickUserAdd()
                
                cy.wait(1000); // Add a short wait between adding users
            }

            cy.wait(2000);

       // businessunit.clickCancel
        }
   
    })
});
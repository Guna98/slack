import buData from '../../../fixtures/business_unit.json';

export class businessUnits{
    user_management ='#user-management > .chakra-link'
    add_businessUnit = '#businessUnitOnBoardingTarget'
    businessunit_name='input[placeholder="Enter Business Unit name"]'
    add_country = 'select[name="country_id"]'
    select_location = 'select[name="location_id"]'
    click_add = 'button[type="submit"]'
   
    click_close = 'button[class="chakra-button css-mzy1vu"]'
    //add_user = 'button[aria-label="Done"][data-buc="${businessUnitName}"]'
    enter_name = 'input[placeholder="Enter Name"]'
    enter_email = 'input[placeholder="Enter Email ID"]'
    enter_mobile = 'input[placeholder="Enter Mobile No."]'
    bu_department = 'select[name="department"]'
    click_adduser = 'button[type="submit"]'
    click_cancel = 'button[class="chakra-button css-14t5572"]'

clickUserManagement(){
    cy.get(this.user_management).click()
    cy.wait(3000)
    return this
    } 
clickAddBusinessUnit(){
    cy.get(this.add_businessUnit).click()
    cy.wait(3000)
    return this
}
enterBusinessUnitName(index){
    // Access the business unit name from the JSON file
    //const businessUnitName = businessunit.businessUnit_name;
    
    // Type the business unit name into the input field
    cy.get(this.businessunit_name).type(buData.businessUnit_name[index]);
    return this;
}
SelectCountry(index){
    cy.get(this.add_country).select(buData.country_of_incorporation[index])
    
    // Wait for the location dropdown to be populated
   /* cy.wait(1000)
    
    cy.get(this.add_country).then($select => {
        // Get the selected country
        const selectedCountry = $select.find('option:selected').text()
        
        // Get the locations for the selected country
        const locations = buData.country_locations[selectedCountry]
        
        if (locations && locations.length > 0) {
            // Select a random location from the available options
            const randomLocation = locations[Math.floor(Math.random() * locations.length)]
            cy.get(this.select_location).select(randomLocation)
        } else {
            // If no locations found, select the first option
            cy.get(this.select_location).select(index)
            cy.log(`No specific locations found for ${selectedCountry}. Selected the first available option.`)
        }
    })*/
    return this
}
//SelectLocation(index){

    //cy.get(this.select_location).select(buData.country_locations[index])
    //return this;
//}
clickOnAdd(){
    cy.get(this.click_add).click()
    return this
}
clickClose(){
    cy.get(this.click_close).click()
    return this
}
clickAddUser(index){

    const businessUnitName = buData.businessUnit_name[index]; 
    const click_icon = `button[data-buc="${businessUnitName}"]`;
    //'div[class="css-5px4n7"]'
    cy.get(click_icon).eq(1).click({ multiple: true });
    return this
}
enterName(index){
    cy.get(this.enter_name).type(buData.name[index])
    return this
}
enterEmail(index){
    cy.get(this.enter_email).type(buData.email[index])
    return this;
}
enterMobile(index){
    cy.get(this.enter_mobile).type(buData.mobile[index])
    return this;
}
businessUnitDepartment(index) {
    cy.get(this.bu_department).select(buData.buDepartment[index]);
    return this;
}
clickUserAdd(){
    cy.get(this.click_adduser).click()
}
clickCancel(){
    cy.get(this.click_cancel).click()
}
}


export class AddMaterial{
preference_button= 'button:contains("Preferences")'
material_topics ='button:contains("Material topics")' 
add_material_topics = '.css-aanjti'
checkBox_material_topic ='div[class="chakra-portal"] div:nth-child(13) label:nth-child(1)'
return_back= 'button[class="chakra-modal__close-btn css-1ik4h6n"]'

clickPreference(){
    cy.get(this.preference_button).click()
    return this
}

clickMaterialTopics(){
    cy.get(this.material_topics, { timeout: 10000 }).should('be.visible').click()
    return this
}
clickAddMaterialTopics(){
    cy.get(this.add_material_topics).click()
    return this
}
clickCheckBoxMaterialTopics(){
    cy.get(this.checkBox_material_topic).click()
    return this
}
clickReturnBack(){
    cy.get(this.return_back).click()
    return this
}
}

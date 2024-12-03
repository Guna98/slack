import materialTopicData from '../../../fixtures/add_assessment_material_topic.json';
import {selectDate} from '../../../utils/dateUtils'

export class AddAssessmentMaterialTopic{

    logo_img = '.css-1pmp3sx'
    assessment_button = 'div[id="assessment"]'
    add_assessment_button = 'button[class="chakra-button chakra-menu__menu-button css-1xyv3x9"]'
    material_topics = 'button[class="chakra-menu__menuitem css-1k2sfp5"]'
    add_material_topics = 'select[name="material_topic_id"]'
    select_date='select[data-select="data-start-date"]'
    assessment_due_date='#data-due-date'
    audit_due_date='#audit-due-date'
    select_auditor='select[data-select="select-auditor"]'
    business_criticality= '#business-criticality'
    pick_supplier_category= '#supplier-category'
    view_supplier='View Suppliers'
    close_view='.chakra-modal__close-btn'
    send_assessment='.css-1ayfwcb > .chakra-button'


clickLogo(){
    cy.get(this.logo_img).click()
    return this
}
 

clickAssessment(){
    cy.get(this.assessment_button).click()
    return this
}

clickAddAssessment(){
    cy.get(this.add_assessment_button).click()
    return this
}   

clickMaterialTopics(){
    cy.get(this.material_topics).click()
    return this
}

selectMaterialTopic(index){
    cy.get(this.add_material_topics).select(materialTopicData.materialTopics[index]);
    return this;
}

selectDate(index){
    cy.get(this.select_date).select(materialTopicData.date[index]);
    return this;
}

selectAssessmentDueDate(){
    cy.get(this.assessment_due_date).clear().then(($input) => {
        selectDate(materialTopicData.due_date.month, materialTopicData.due_date.year, materialTopicData.due_date.day, $input);
    })
    return this
}

selectAuditDueDate(){
    cy.get(this.audit_due_date).clear().then(($input) => {
        selectDate(materialTopicData.audit_date.month, materialTopicData.audit_date.year, materialTopicData.audit_date.day, $input);
    })
    return this;
}
selectAuditor(index){
    cy.get(this.select_auditor).select(materialTopicData.auditors[index]);
    return this;
}

selectBusinessCriticality(index) {
    cy.get(this.business_criticality).click().type(materialTopicData.businessCriticality[index])
    cy.get(this.business_criticality).type('{downArrow}{enter}')
    cy.get(this.business_criticality).click()
    return this;
}

selectSupplierCategory(index){
    cy.get(this.pick_supplier_category).click().type(materialTopicData.supplierCategory[index]);
    cy.get(this.pick_supplier_category).type('{downArrow}{enter}')
    cy.get(this.pick_supplier_category).click()
    return this;
}

clickViewSupplier(){
    cy.contains(this.view_supplier).click()
    return this;
}

clickCloseView(){
    cy.get(this.close_view).click()
    return this;
}

clickSendAssessment(){
    cy.get(this.send_assessment).click()
    return this;
}

}


import auditorData from '../../../fixtures/auditor_data.json';

export class Add_Auditor{
   
    add_auditor = 'Add Auditor'
    auditor_name = '#fulltName'
    mobile_no = '#phoneNumber'
    auditor_email = '#email'
    submit = 'button[type="submit"]'
    
    
    addAuditorBtn(){
        cy.contains(this.add_auditor).click();
        return this;
    }
     auditorName(){
       cy.get(this.auditor_name).type(auditorData.auditor_name);
       return this;
     }
     auditorMobile(){
        cy.get(this.mobile_no).type(auditorData.mobile_no);
        return this;
    }
    auditorEmail(){
        cy.get(this.auditor_email).type(auditorData.auditor_email);
        return this;
    }
    clickSubmit(){
        cy.get(this.submit).click();
    }

    
}
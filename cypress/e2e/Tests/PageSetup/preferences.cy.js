/// <reference types="cypress"/>
import { PageSetup } from "../../pages/Page_Setup/Preferences"

const tabs = new PageSetup()

describe('Login and Navigate to preferences', () => {
  
  beforeEach(() => {
    cy.login();
  });

  it('Navigate to preferences', () => {

    // Select options using index value
    
    tabs
      .clickPreference()
      .SelectDateFormat(0)  
      .SelectTimeFormat(0)  
      .SelectCurrency(0)    
      .SelectDataCaptureFrequency(1)
      .SelectReportingCycle(0)
      .SelectNumberFormat() 
      .SelectAutoEmailReminderForSupplier(1)  
      .SelectAutoEmailReminderForCollaborator(0)  
      .SelectWorkingDays(0)  
      .clickSave();
  });
});

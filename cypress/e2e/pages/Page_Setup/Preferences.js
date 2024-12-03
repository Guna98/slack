export class PageSetup{
   
    preference_button= '#preferences > .chakra-link'
    date_format = '#dateFormatId'
    time_format = '#timeFormatId'
    currency = '#preferredCurrencyId'
    data_capture_frequency = '#supplierAssessmentFreq'
    reporting_cycle = '#financialYearCycle'
    number_format = '#numberformat'
    automated_email_reminders_for_suppliers= '#automated_email_reminder_for_supplier'
    automated_email_reminders_for_collaborator = '#automated_email_reminder_for_collaborator'
    working_days = '#working_days'
    save_button = '#prefernceOnBoardingTarget2'

    // create functions

   
    clickPreference(){
        cy.get(this.preference_button).click()
        cy.wait(3000)
        return this
        
    }   
    // Fill the data

    selectOption(selector, optionKey, index = 0) {
        // Load data from a file
        cy.fixture('preferences').then((data) => {
            // Get the option(s) for the given key
            const option = data[optionKey];
            
            // Find the dropdown element
            cy.get(selector).then((dropdown) => {
                // If we have options
                if (option) {
                    // If it's a list of options
                    if (Array.isArray(option)) {
                        // If we can select multiple options
                        if (dropdown.prop('multiple')) {
                            // Select all options
                            cy.wrap(dropdown).select(option);
                        } else {
                            // Select one option based on the index
                            cy.wrap(dropdown).select(option[index]);
                        }
                    } else {
                        // If it's a single option, select it
                        cy.wrap(dropdown).select(option);
                    }
                } else {
                    // If no option found, show a warning
                    cy.log(`Warning: No option found for ${optionKey}`);
                }
            });
        });
        return this;
    }

    SelectDateFormat(index = 0) {
        return this.selectOption(this.date_format, 'dateFormats', index);
    }

    SelectTimeFormat(index = 0) {
        return this.selectOption(this.time_format, 'timeFormat', index);
    }

    SelectCurrency(index = 0) {
        return this.selectOption(this.currency, 'currency', index);
    }

    SelectDataCaptureFrequency(index = 0) {
        return this.selectOption(this.data_capture_frequency, 'dataCaptureFrequency', index);
    }

    SelectReportingCycle(index = 0) {
        return this.selectOption(this.reporting_cycle, 'reportingCycle', index);
    }

    SelectNumberFormat() {
        return this.selectOption(this.number_format, 'numberFormat');
    }

    SelectAutoEmailReminderForSupplier(index = 0) {
        return this.selectOption(this.automated_email_reminders_for_suppliers, 'emailReminderSupplier', index);
    }

    SelectAutoEmailReminderForCollaborator(index = 0) {
        return this.selectOption(this.automated_email_reminders_for_collaborator, 'emailReminderCollaborator', index);
    }

    SelectWorkingDays(index = 0) {
        return this.selectOption(this.working_days, 'workingDays', index);
    }

    clickSave(){
        cy.get(this.save_button).click()
        return this
    }
}


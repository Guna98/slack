const { defineConfig } = require("cypress");
const sendCypressVideosToSlack = require('./cypress/slackReporter');

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',  
    reporterOptions: {
      charts: true,
      reportDir: 'cypress/reports',  
      overwrite: false,  
      embeddedScreenshots: true,            
      html: true,                    
      json: true                    
    },
    video: true,                   
    screenshotOnRunFailure: true,     
  },
  setupNodeEvents(on, config) {
    require('mochawesome/plugin')(on);
    on('task', {
      sendTestResults: async (results) => {
        const testResults = {
          totalTests: results.totalTests,
          totalPassed: results.totalPassed,
          totalFailed: results.totalFailed,
          duration: results.duration
        };
        await after(results);
        return null;
      }
    });
    
    async function after(results) {
      if (results) {
        await sendCypressVideosToSlack();
      }
    }
  },
});


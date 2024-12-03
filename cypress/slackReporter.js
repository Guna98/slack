const { IncomingWebhook } = require('@slack/webhook');
const fs = require('fs');
const path = require('path');

const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';
const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);

async function sendCypressVideosToSlack() {
  // Dynamically find the most recent Cypress videos directory
  const cypressRootDir = path.join(process.cwd(), 'cypress');
  const reportsDir = path.join(cypressRootDir, 'reports');
  
  // Find most recent video directory
  const videoDirs = fs.readdirSync(reportsDir)
    .filter(file => fs.statSync(path.join(reportsDir, file)).isDirectory())
    .map(dir => path.join(reportsDir, dir, 'videos'))
    .filter(dir => fs.existsSync(dir));

  // Use most recent video directory
  const videoDir = videoDirs[videoDirs.length - 1];

  if (!videoDir) {
    console.log('No video directory found');
    return;
  }

  try {
    const videoFiles = fs.readdirSync(videoDir)
      .filter(file => file.endsWith('.mp4'));

    for (const videoFile of videoFiles) {
      const videoPath = path.join(videoDir, videoFile);
      
      await webhook.send({
        text: `Cypress Test Video: ${videoFile}`,
        files: [{
          file: fs.readFileSync(videoPath),
          filename: videoFile,
          filetype: 'mp4'
        }]
      });

      console.log(`Sent ${videoFile} to Slack`);
    }
  } catch (error) {
    console.error('Slack reporting error:', error);
  }
}

module.exports = sendCypressVideosToSlack;
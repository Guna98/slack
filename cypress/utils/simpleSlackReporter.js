const { WebhookClient } = require('@slack/webhook');

const sendToSlack = async (testResults) => {
    const webhookUrl = 'https://hooks.slack.com/services/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'; // Replace with your webhook URL
    const webhook = new WebhookClient({ url: webhookUrl });

    const message = {
        blocks: [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: "Test Results"
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Test Suite Name:*\n${testResults.suiteName}\n*Test Summary:*\n${testResults.summary}`
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Custom Message:*\n${testResults.customMessage}`
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Screenshots:*\n${testResults.screenshotLinks.join('\n')}`
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*Video Links:*\n${testResults.videoLinks.map(link => `Video: ${link}`).join('\n')}`
                }
            },
            {
                type: "divider"
            },
            ...testResults.details.map(detail => ({
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*${detail.name}:* ${detail.status}`
                }
            }))
        ]
    };

    try {
        await webhook.send(message);
        console.log('Message sent to Slack successfully');
    } catch (error) {
        console.error('Error sending message to Slack:', error);
    }
}

module.exports = { sendToSlack };
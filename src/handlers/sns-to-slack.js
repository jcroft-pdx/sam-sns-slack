/**
 * SNS-TO-SLACK
 *
 */

const { IncomingWebhook } = require('@slack/webhook');
const url = process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(url);
const date = require('date-and-time');
const time_offset = parseInt(process.env.TIME_OFFSET);
const message_header = process.env.MESSAGE_HEADER || '';

exports.snsToSlackHandler = async function(event, context) {
  console.log(event);
  // parse information
	var message = event.Records[0].Sns.Message;
	var topicarn = event.Records[0].Sns.TopicArn;
  var timestamp = event.Records[0].Sns.Timestamp;
  // 1970-01-01T00:00:00.000Z
  var dtime  = new Date(timestamp);
  var offset_date = date.addHours(dtime, time_offset);
  var localtime = date.format(offset_date, 'MM-DD-YYYY hh:mm A');

  // Send the notification
  return await webhook.send({
    text: `*${message_header}*\n
    *TopicArn:* ${topicarn}\n
    *Message:* \`\`\`${message}\`\`\`\n
    *Timestamp:* ${timestamp}\n
    *Time:* ${localtime}\n`,
  });
}


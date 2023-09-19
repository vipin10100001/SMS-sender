const express = require('express');
const twilio = require('twilio');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

function sendSMS() {
  const client = new twilio.Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

  client.messages
    .create({
      body: 'Hello from TOPG',
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.PHONE_NUMBER,
    })
    .then((message) => console.log('MESSAGE SENT', message.sid))
    .catch((err) => console.error(err, 'MESSAGE NOT SENT'));
}

sendSMS();

app.listen(6000, () => {
  console.log('Server started at port 5000');
});

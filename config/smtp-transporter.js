const nodemailer = require("nodemailer");

// Replace with your preferable SMTP server, port, account, and password
// You can also use OAuth2 token for better security
// See https://nodemailer.com/smtp/ for details of how to configure
const SMTP_SERVER = "smtp-mail.outlook.com";
const SMTP_PORT = 587;
const SMTP_AUTH_ACCOUNT = "isawesomeelearn@gmail.com";
const SMTP_AUTH_PASSWORD = "vnbvocuyygwidjzx";

const mailer = nodemailer.createTransport({
  host: SMTP_SERVER,
  port: SMTP_PORT,
  secure: false,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false
  },
  auth: {
    user: SMTP_AUTH_ACCOUNT,
    pass: SMTP_AUTH_PASSWORD,
  },
  service: "gmail",
});

const sendEmail = (to, subject, content) => {
  const mailOptions = {
    to: to,
    from: SMTP_AUTH_ACCOUNT,
    subject: subject,
    text: content,
  };
  return mailer.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  })
};

module.exports = { sendEmail };

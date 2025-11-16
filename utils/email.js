const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    console.log("FROM USED:", process.env.EMAIL_FROM);
    this.from = process.env.EMAIL_FROM 
      ? `Jonas Schmedtmann <${process.env.EMAIL_FROM}>`
      : 'Natours <noreply@natours.io>';
  }

  newTransport() {
    // Option 1: SendGrid (using API key - recommended for production)
    if (process.env.SENDGRID_API_KEY) {
      return nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'apikey', // This is always 'apikey' for SendGrid
          pass: process.env.SENDGRID_API_KEY
        }
      });
    }

    // Option 2: SendGrid (using username/password - older method)
    if (process.env.SENDGRID_USERNAME && process.env.SENDGRID_PASSWORD) {
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
    }

    // Option 3: Gmail or other SMTP service
    if (process.env.EMAIL_HOST && process.env.EMAIL_PORT) {
      return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT),
        secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      });
    }

    // Option 4: Gmail (if EMAIL_USERNAME and EMAIL_PASSWORD are set without EMAIL_HOST)
    if (process.env.EMAIL_USERNAME && process.env.EMAIL_PASSWORD && !process.env.EMAIL_HOST) {
      return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD // Use App Password for Gmail
        }
      });
    }

    // Fallback: Log error and throw
    throw new Error(
      'Email configuration missing! Please set one of the following:\n' +
      '  - SENDGRID_API_KEY (recommended)\n' +
      '  - SENDGRID_USERNAME and SENDGRID_PASSWORD\n' +
      '  - EMAIL_HOST, EMAIL_PORT, EMAIL_USERNAME, EMAIL_PASSWORD\n' +
      '  - EMAIL_USERNAME and EMAIL_PASSWORD (for Gmail)'
    );
  }

  // Send the actual email
  async send(template, subject) {
    try {
      // 1) Render HTML based on a pug template
      const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
        firstName: this.firstName,
        url: this.url,
        subject
      });

      // 2) Define email options
      // Use fromString (v4/v5 API)
      const text = htmlToText.fromString(html);
      const mailOptions = {
        from: this.from,
        to: this.to,
        subject,
        html,
        text
      };

      // 3) Create a transport and send email
      await this.newTransport().sendMail(mailOptions);
    } catch (error) {
      // Re-throw with more context
      throw new Error(`Email send failed: ${error.message}`);
    }
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)'
    );
  }
};

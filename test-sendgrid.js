// Test script to verify SendGrid integration
require('dotenv').config({ path: './config.env' });
const nodemailer = require('nodemailer');

console.log('🔍 Testing SendGrid Integration...\n');

// Check if API key is set
if (!process.env.SENDGRID_API_KEY) {
  console.error('❌ SENDGRID_API_KEY is not set in config.env');
  process.exit(1);
}

console.log('✅ SENDGRID_API_KEY is set');
console.log('✅ EMAIL_FROM:', process.env.EMAIL_FROM || 'Not set\n');

// Create SendGrid transport
const transport = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});

// Verify connection
transport.verify((error, success) => {
  if (error) {
    console.error('❌ SendGrid connection failed:', error.message);
    console.error('\nPossible issues:');
    console.error('  - API key is incorrect');
    console.error('  - API key doesn\'t have "Mail Send" permissions');
    console.error('  - Network connectivity issues');
    process.exit(1);
  } else {
    console.log('✅ SendGrid connection verified successfully!');
    console.log('\n📧 SendGrid is ready to send emails!');
    console.log('\nTo test sending an email, create a new account and check:');
    console.log('  1. Server console for: ✅ Welcome email sent successfully');
    console.log('  2. The recipient\'s inbox (and spam folder)');
  }
});


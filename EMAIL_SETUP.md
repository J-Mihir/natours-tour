# Email Setup Guide

This guide will help you configure email sending for account creation notifications.

## Option 1: SendGrid (Recommended for Production)

SendGrid is a reliable email service. Here's how to set it up:

1. **Sign up for SendGrid**: Go to https://sendgrid.com and create a free account (100 emails/day free)

2. **Create an API Key**:
   - Go to Settings → API Keys
   - Click "Create API Key"
   - Give it a name (e.g., "Natours App")
   - Select "Full Access" or "Mail Send" permissions
   - Copy the API key (you'll only see it once!)

3. **Add to your `config.env` file**:
   ```env
   SENDGRID_API_KEY=SG.your_api_key_here
   EMAIL_FROM=noreply@yourdomain.com
   ```

4. **Verify your sender** (if using a custom domain):
   - Go to Settings → Sender Authentication
   - Verify your domain or single sender

## Option 2: Gmail (Good for Development)

For development, you can use Gmail:

1. **Enable 2-Factor Authentication** on your Gmail account

2. **Create an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Natours" as the name
   - Copy the 16-character password

3. **Add to your `config.env` file**:
   ```env
   EMAIL_USERNAME=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   EMAIL_FROM=your-email@gmail.com
   ```

## Option 3: Other SMTP Services

For other SMTP services (Outlook, Yahoo, custom SMTP):

1. **Add to your `config.env` file**:
   ```env
   EMAIL_HOST=smtp.example.com
   EMAIL_PORT=587
   EMAIL_USERNAME=your-email@example.com
   EMAIL_PASSWORD=your-password
   EMAIL_FROM=your-email@example.com
   ```

## Testing

After setting up your email configuration:

1. Restart your server
2. Create a new account
3. Check your server console for:
   - ✅ `Welcome email sent successfully to user@example.com` (success)
   - ❌ `EMAIL SEND FAILED: ...` (check your configuration)

4. Check the recipient's inbox (and spam folder)

## Troubleshooting

- **Email not sending?** Check your server console for error messages
- **Gmail not working?** Make sure you're using an App Password, not your regular password
- **SendGrid not working?** Verify your API key is correct and has "Mail Send" permissions
- **Check spam folder** - emails might be filtered


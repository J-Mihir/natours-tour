# SendGrid Sender Verification Guide

## Error: "The from address does not match a verified Sender Identity"

This error occurs because SendGrid requires you to verify the email address you're sending FROM before you can send emails.

## Solution: Verify Your Sender Identity

### Option 1: Verify a Single Sender (Easiest for Development)

1. **Log in to SendGrid**: https://app.sendgrid.com

2. **Navigate to Sender Authentication**:
   - Click on **Settings** (gear icon) in the left sidebar
   - Click on **Sender Authentication**
   - Click on **Verify a Single Sender**

3. **Fill out the form**:
   - **From Email Address**: `joshimihir2004@gmail.com` (must match your EMAIL_FROM)
   - **From Name**: `Jonas Schmedtmann` (or any name you want)
   - **Reply To**: `joshimihir2004@gmail.com` (same as from email)
   - Fill in your company/address information (required fields)

4. **Submit and Verify**:
   - Click **Create**
   - Check your Gmail inbox for a verification email from SendGrid
   - Click the verification link in the email
   - Wait 1-2 minutes for SendGrid to process

5. **Test Again**:
   - Restart your server
   - Create a new account
   - Check for the success message: `✅ Welcome email sent successfully`

### Option 2: Verify Your Domain (For Production)

If you have your own domain (e.g., `mihir.io`):

1. Go to **Settings → Sender Authentication → Authenticate Your Domain**
2. Follow the DNS setup instructions
3. Add the required DNS records to your domain
4. Wait for verification (can take up to 48 hours)

## Quick Checklist

- [ ] Logged into SendGrid dashboard
- [ ] Navigated to Settings → Sender Authentication
- [ ] Created and verified Single Sender with email: `joshimihir2004@gmail.com`
- [ ] Received and clicked verification email
- [ ] Updated `config.env` with verified email: `EMAIL_FROM=joshimihir2004@gmail.com`
- [ ] Restarted server
- [ ] Tested by creating a new account

## Troubleshooting

**Still getting the error?**
- Make sure the email in `EMAIL_FROM` exactly matches the verified sender email
- Wait a few minutes after verification (SendGrid needs time to process)
- Check that you clicked the verification link in the email
- Try logging out and back into SendGrid to refresh your session

**Need to use a different email?**
- Verify that email address in SendGrid first
- Update `EMAIL_FROM` in `config.env` to match

## Important Notes

- You can verify multiple sender addresses
- Free SendGrid accounts can send 100 emails/day
- Verified senders are permanent (unless you delete them)
- The "From Name" in your code can be different from the verified email


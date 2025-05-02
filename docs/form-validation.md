# Form Validation and Spam Protection

This document outlines the server-side validation and spam protection measures implemented for the Overlook website's contact form.

## Multi-Layer Protection Strategy

We've implemented a multi-layered approach to form protection:

1. **Client-Side Validation**: Basic field validation in the browser
2. **Honeypot Field**: Hidden field to catch basic bots
3. **reCAPTCHA Integration**: Google reCAPTCHA for human verification
4. **Fallback Verification**: Checkbox alternative when reCAPTCHA can't load
5. **Server-Side Validation**: Netlify function for additional validation and rate limiting

## Server-Side Validation Details

The `form-submission.js` Netlify function provides several layers of protection:

### 1. Rate Limiting

- Limits submissions to 5 per IP address per hour
- Uses an in-memory store to track submissions
- Prevents brute-force spam attacks

### 2. Spam Pattern Detection

Checks form content for common spam patterns:
- Suspicious keywords (viagra, casino, etc.)
- Too many links in the message
- Suspicious email domains

### 3. Bot Detection

- Tracks page load time and submission time
- Flags submissions that happen too quickly (less than 3 seconds)
- Validates honeypot field server-side

### 4. Fallback Verification

- Provides a checkbox alternative when reCAPTCHA doesn't load
- Adds a special verification token to the form data
- Applies stricter validation for submissions using the fallback

## Implementation Notes

### Form Submission Flow

1. User fills out the form
2. Client-side validation checks required fields
3. Form is submitted to the Netlify function
4. Function validates the submission
5. If valid, submission is logged and success response is returned
6. If invalid, appropriate error message is returned

### Fallback Experience

When reCAPTCHA doesn't load (e.g., on the Netlify subdomain):
- A checkbox alternative is displayed
- User must check "I am not a robot"
- Stricter server-side validation is applied
- Submission still works without reCAPTCHA

## Future Improvements

1. **Persistent Storage**: Replace in-memory store with Netlify's Key-Value store for persistent rate limiting
2. **Custom Domain Configuration**: Configure reCAPTCHA for the final domain name
3. **Spam Pattern Updates**: Regularly update spam patterns based on actual spam received
4. **Analytics**: Add logging to track spam attempts and improve protection

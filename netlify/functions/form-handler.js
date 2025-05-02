// Netlify function to handle form submissions with additional spam filtering
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // Parse the form data
    const formData = JSON.parse(event.body);
    
    // Basic spam checks
    const isSpam = checkForSpam(formData);
    
    if (isSpam) {
      console.log('Spam detected:', formData);
      // Return success to avoid letting spammers know they were detected
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submission received' })
      };
    }
    
    // If it passes our checks, let Netlify handle the form submission normally
    // This is just an additional layer of protection
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful' })
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
};

// Function to check for common spam patterns
function checkForSpam(formData) {
  // Check for empty required fields
  if (!formData.firstName || !formData.email || !formData.message) {
    return true;
  }
  
  // Check for bot field being filled (honeypot)
  if (formData['bot-field']) {
    return true;
  }
  
  // Check for suspicious email patterns
  const suspiciousEmailPatterns = [
    /@mailinator\.com$/i,
    /@tempmail\.com$/i,
    /@guerrillamail\.com$/i,
    /@yopmail\.com$/i,
    /@10minutemail\.com$/i
  ];
  
  if (suspiciousEmailPatterns.some(pattern => pattern.test(formData.email))) {
    return true;
  }
  
  // Check for suspicious message content
  const suspiciousContentPatterns = [
    /\bviagra\b/i,
    /\bcasino\b/i,
    /\bbet\b/i,
    /\blottery\b/i,
    /\bporn\b/i,
    /\bsex\b/i,
    /\bhttp:\/\//i, // Links often indicate spam
    /\bhttps:\/\//i,
    /\bwww\./i
  ];
  
  if (suspiciousContentPatterns.some(pattern => pattern.test(formData.message))) {
    return true;
  }
  
  // Check for message length (too short or too long)
  if (formData.message.length < 10 || formData.message.length > 5000) {
    return true;
  }
  
  return false;
}

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const submitContactForm = async (req, res) => {

  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Please provide all required fields.'
    });
  }

  try {

    // Mock mode for development
    if (!process.env.RESEND_API_KEY) {

      console.log('--- Mock Email Received ---');
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log('---------------------------');

      return res.status(200).json({
        message: 'Message recorded successfully (Mock).'
      });
    }

    // Send email using Resend
    await resend.emails.send({

      from: 'onboarding@resend.dev',

      to: process.env.EMAIL_USER,

      subject: `🚀 Portfolio Contact from ${name}`,

      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">

          <h2 style="color:#111;">New Portfolio Contact</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <h3>Message</h3>

          <p>
            ${message}
          </p>

        </div>
      `
    });

    return res.status(200).json({
      message: 'Message sent successfully.'
    });

  } catch (error) {

    console.error('Resend Error:', error);

    return res.status(500).json({
      error: 'Failed to send message.'
    });
  }
};

module.exports = { submitContactForm };
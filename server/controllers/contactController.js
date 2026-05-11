const nodemailer = require('nodemailer');

const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }
  
  try {
    // Note: If no email credentials, log to console instead for dev testing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('--- Mock Email Received ---');
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log('---------------------------');
      return res.status(200).json({ message: 'Message recorded successfully (Mock).' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: `<div style="font-family: Arial, sans-serif; padding: 20px;">
              <h2>New Portfolio Contact</h2>

              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>

              <h3>Message</h3>
              <p>${message}</p>
            </div>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
};

module.exports = { submitContactForm };

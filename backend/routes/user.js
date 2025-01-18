const express = require('express');
const router = express.Router();
const User = require('../schemas/User');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  auth: {
    user: 'um337757@gmail.com',
    pass: 'ixfj mbrp vgso gzwd' // Use your actual Gmail password or app password
  }
});

// POST route for user registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ name, email, password: hashedPassword });
    // Send email
    transporter.sendMail({
      from: 'um337757@gmail.com',
      to: email,
      subject: 'Welcome to GearGrid',
      text: '',
      html: `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Our Platform!</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
              }
              .logo {
                text-align: center;
                margin-bottom: 20px;
              }
              .logo img {
                width: 150px;
                height: auto;
              }
              .message {
                margin-bottom: 20px;
                text-align: justify;
              }
              .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007bff;
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
              }
            </style>
            </head>
            <body>
              <div class="container">
                <div class="logo">
                  <img src="https://your-website.com/logo.png" alt="Company Logo">
                </div>
                <div class="message">
                  <h2>Welcome to Our Platform!</h2>
                  <p>Dear ${name}</p>
                  <p>Thank you for joining our platform. We're excited to have you on board!</p>
                  <p>Feel free to explore our features and services. If you have any questions or need assistance, don't hesitate to contact us.</p>
                  <p>Best regards,</p>
                  <p>The PK Posh Team</p>
                </div>
                <div class="footer">
                  <p>Follow us on <a href="https://twitter.com/your-company">Twitter</a> | <a href="https://facebook.com/your-company">Facebook</a></p>
                </div>
              </div>
            </body>
            </html>
            `

    }).then(info => {
      console.log('Email sent: ' + info.response);
    }).catch(error => {
      console.error('Error sending email:', error);
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email (replace this with your actual database query)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Compare password hash
    const passwordMatch = bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    } else {

      // Generate JWT access token
      const accessToken = jwt.sign(
        { userId: user.id, name: user.name, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1d' }
      );

      // Generate JWT refresh token (optional)
      const refreshToken = jwt.sign(
        { userId: user.id },
        process.env.REFRESH_TOKEN_SECRET
      );
      user.refreshToken = refreshToken;
      await user.save()
      // Return tokens to the client
      res.status(200).json({ data: { accessToken, refreshToken } });
    }
  }
  catch (err) {
    res.status(500).json({ message: "internal server error" })
  }
});

router.post('/verify-access-token', (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1]; // Extract access token from authorization header
  if (!accessToken) {
    return res.status(401).json({ error: "Access token not provided" });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next(); // Proceed to next middleware
  } catch (error) {
    return res.status(401).json({ error: "Invalid access token" });
  }
})

module.exports = router;

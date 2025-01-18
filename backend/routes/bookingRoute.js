const express = require('express');
const Booking = require('../schemas/Bookings.js');
const nodemailer = require('nodemailer');

const router = express.Router();

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

// Route to handle POST request for saving booking data
router.post('/bookings', async (req, res) => {
  try {
    const { date, time, name, email, phone } = req.body;
    const dateStr = date
    const newdate = new Date(dateStr);

    const year = newdate.getFullYear();
    const month = newdate.toLocaleString('default', { month: 'long' }); // Get month name
    const day = newdate.getDate();

    const formattedDate = `${month} ${day}, ${year}`;


    const booking = new Booking({ date, time, name, email, phone });
    await booking.save();
    transporter.sendMail({
      from: 'um337757@gmail.com',
      to: email,
      subject: 'Welcome to Pk Posh',
      text: '',
      html: `
               <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation</title>
  <style>
    /* Add your custom styles here */
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .logo {
      text-align: center;
      margin-bottom: 20px;
    }
    .logo h1 {
      font-size: 24px;
      color: #007bff;
      margin: 0;
    }
    .content {
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <h1>Welcome to GearGrid</h1>
    </div>
    <div class="content">
      <p>Dear Customer,</p>
      <p>Your booking has been successfully saved. Please visit our shop at your convenience.</p>
      <p>Booking Date: ${formattedDate} Time: ${time}</p> <!-- Modify the date as needed -->
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
    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

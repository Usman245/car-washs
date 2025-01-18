
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const BookingRoute = require('./routes/bookingRoute.js')
const adminRoute = require('./routes/admin.js')
const cors = require('cors');
const BlogRoute = require('./routes/blog/blog.js')
const userRoute = require('./routes/user.js')



const app = express();
app.use(cors())

app.use(express.json());
const PORT = process.env.PORT
app.use('/', BookingRoute)
app.use('/admin', adminRoute)
app.use('/blog', BlogRoute)
app.use('/user', userRoute)

const MONGODB_URI = process.env.MONGO_URI
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after successfully connecting to MongoDB
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err.message);
    });

// Define routes and middleware below...

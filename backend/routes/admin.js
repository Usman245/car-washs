const express = require('express')
const router = express.Router();
const Booking = require('../schemas/Bookings')
const Image = require('../schemas/Image');
const Blog = require('../schemas/Blog');
const Service = require('../schemas/Service')
router.get('/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.delete('/bookings/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        await Booking.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

const multer = require('multer');
const path = require('path');
const fs = require('fs');





// Handle POST request for adding a blog
router.post('/addBlogs', async (req, res) => {
    try {
        const { title, firstPara, secondPara, thirdPara, url1, url2, url3 } = req.body;
        const date = new Date().toLocaleDateString('en-US', {
            month: 'long', // Full month name (e.g., January)
            day: 'numeric', // Day of the month (1-31)
            year: 'numeric' // Full year (e.g., 2024)
        }); // Format: day/month/year
        const blog = new Blog({ title, firstPara, secondPara, thirdPara, url1, url2, url3, date });
        await blog.save();
        res.status(201).json({ message: 'Blog added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to fetch all blogs
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find(); // Fetch all blogs from the database
        res.json(blogs); // Send the retrieved blogs as a JSON response
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' }); // Handle errors
    }
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for uploading images
router.post('/upload', upload.array('images', 3), async (req, res) => {
    try {
        const uploadedImages = req.files;
        const imageUrls = [];

        // Save each image to the database and get its URL
        for (const image of uploadedImages) {
            const newImage = new Image({
                data: image.buffer,
                contentType: image.mimetype
            });
            await newImage.save();
            imageUrls.push(`/admin/images/${newImage._id}`);
        }

        res.status(200).json({ urls: imageUrls });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/images/:id', async (req, res) => {
    try {
        const imageId = req.params.id;
        const image = await getImageById(imageId);
        if (!image) {
            return res.status(404).send('Image not found');
        }
        res.set('Content-Type', image.contentType);
        res.send(image.data);
    } catch (error) {
        console.error('Error serving image:', error);
        res.status(500).send('Internal Server Error');
    }
});
async function getImageById(imageId) {
    try {
        const image = await Image.findById(imageId);
        return image;
    } catch (error) {
        console.error('Error retrieving image:', error);
        throw error;
    }
}

//route for uploading services
router.post('/add', async (req, res) => {
    try {
        const { title, price, time, imgUrl, category } = req.body;
        const newService = new Service({
            title,
            price,
            time,
            imgUrl, category
        });
        await newService.save();
        res.status(201).json({ message: 'Service added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Define route to get all services
router.get('/services', async (req, res) => {
    try {
        // Fetch all services from the database
        const services = await Service.find();

        // Send the list of services as a response
        res.json(services);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: 'Internal server error' });
    }
});
module.exports = router;
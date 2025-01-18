const express = require('express')
const router = express.Router()
const Blog = require('../../schemas/Blog')

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findById(id);
        res.json(blog)
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router
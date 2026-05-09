const express = require('express');
const router = express.Router();

const { 
    createBook, 
    getBooks, 
    getBook, 
    updateBook, 
    deleteBook 
} = require('../controllers/bookController');

router.route('/')
    .get(getBooks)
    .post(createBook);

router.route('/:id')
    .get(getBook)
    .put(updateBook)
    .delete(deleteBook); // NEW: Handle DELETE requests

module.exports = router;
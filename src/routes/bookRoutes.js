const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/create', bookController.createBook);
router.get('/getall', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook)
// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;
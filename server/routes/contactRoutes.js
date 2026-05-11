const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController.js');

router.post('/', submitContactForm);

module.exports = router;

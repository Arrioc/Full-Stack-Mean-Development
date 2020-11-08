const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* GET travel page. IS TRAVEL PAGE TO BE THE HOMEPAGE??*/
router.get('/', controller.travel);

module.exports = router;
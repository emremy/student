const express = require('express');
const router = express.Router();

const studentsController = require('../controller/studentsController');


router.get('/aidatlar',studentsController.index);


module.exports = router;
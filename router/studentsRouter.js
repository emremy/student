const express = require('express');
const router = express.Router();

const studentsController = require('../controller/studentsController');


router.get('/aidatlar',studentsController.index);
router.get('/ogrenciler',studentsController.students);

module.exports = router;
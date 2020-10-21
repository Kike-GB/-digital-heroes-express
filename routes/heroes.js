var express = require('express');
var router = express.Router();
var heroesController = require('../controllers/heroescontrollers');


router.get('/', heroesController.lista);
router.get('/detalle/:id', heroesController.detalle);
router.get('/detalle/:id/resenia', heroesController.resenia)

module.exports = router; 
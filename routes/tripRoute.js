const express = require('express');
const { tripController } = require('../controllers/tripController');
const tripRouter = express.Router();

tripRouter.post('/trip-details',tripController);

module.exports = tripRouter;
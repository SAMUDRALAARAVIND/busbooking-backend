const express = require('express');
const { createCity, getAllCities, getCityById, updateCity, deleteCity } = require('../controllers/cityController');

const router = express.Router();

router.post('/cities', createCity);
router.get('/cities', getAllCities);
router.get('/cities/:id', getCityById);
router.put('/cities/:id', updateCity);
router.delete('/cities/:id', deleteCity);

module.exports = router;

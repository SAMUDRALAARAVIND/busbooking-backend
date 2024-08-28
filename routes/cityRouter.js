const express = require("express");
const { createCity, getAllCity } = require("../controllers/cityControllers.js");

const router = express.Router();

router.route("/city").post(createCity);
router.route("/city").get(getAllCity);

module.exports = router;

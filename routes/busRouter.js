const express = require("express");
const { createBus, getAllBus } = require("../controllers/busControllers.js");

const router = express.Router();
router.route("/bus").post(createBus);
router.route("/bus").get(getAllBus);

module.exports = router;

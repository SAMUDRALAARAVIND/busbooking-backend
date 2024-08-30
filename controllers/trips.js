const getTripsList = require("../services/tripsService");
const router = require("express").Router();

router.post("/trips-list", async (req, res) => {
    const { sourceCityId, destinationCityId, travelDate } = req.body
    if (!sourceCityId || !destinationCityId || !travelDate) {
        return res.status(400).json({
            message: "Missing data",
        })
    }

    try {
        const response = await getTripsList(sourceCityId, destinationCityId, travelDate)
        return res.send(response)
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error
        })
    }
})

module.exports = router
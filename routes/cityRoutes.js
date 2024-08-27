import express from "express";
import { Router } from "express";
import City from "../models/city.js";

const router = Router();

router.get("/cities", async (req, res) => {
  try {
    const cities = await City.find({}); 

    const response = {
      cities: cities.map(city => ({
        cityId: city._id.toString(), // Convert ObjectId -> string
        name: city.name,
        state: city.state,
      })),
    };

    res.status(200).json(response);
  } catch (error) {
    req.status(500).json({
      message: "Server error",
      error,
    });
  }
});


export default router;

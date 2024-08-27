import express from "express";
const app = express();
import "dotenv/config";
import { connectDb } from "./database/db.js";
import cityRoutes from "./routes/cityRoutes.js"


//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

//default routes
app.get("/", (req, res, next) => {
  res.send("Hello from backend");
});

// Use the city routes
app.use("/api" , cityRoutes)

// creating server
const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

const start = async () => {
  try {
    app.listen(PORT, () => {
      // console.log("Listening on port", PORT, "in", MODE, "mode");
      console.log(`Listening on port http://localhost:${PORT} in ${MODE} mode`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

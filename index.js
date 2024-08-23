import express from "express";
const app = express();
import "dotenv/config";

//==========
//body parser
//==========
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//==========
//default routes
//==========

app.get("/", (req, res, next) => {
  res.send("Hello from backend");
});

// ==============
// creating server
// ==============
const PORT = process.env.PORT || 8000;
const MODE = process.env.NODE_ENV || "production";

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Listening on port", PORT, "in", MODE, "mode");
    });
  } catch (error) {
    console.log(error);
  }
};

start();

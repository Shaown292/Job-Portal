// import

import express from "express";
import dotenv from "dotenv";
import colors from "colors";

// Dot env config

dotenv.config();
// rest
 const app = express();


 // routes

 app.get("/", (req, res) => {
    res.send("<h1> Welcome to My JOB PORTAL </h1>");
 });

 // PORT
 const PORT = process.env.PORT || 8080;
 // listen
 app.listen(PORT, () => {
   console.log(`Node Server is running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgMagenta.white);
 });

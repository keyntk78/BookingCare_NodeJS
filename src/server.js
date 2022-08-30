import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import conncetDB from "./config/connectDB";

require("dotenv").config();

let app = express();

// config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

conncetDB();

let port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log("Backend Node js is running on the port: " + port);
});

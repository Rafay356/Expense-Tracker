const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const expenseRoutes = require("./routes/Expenseroute");

dotenv.config();
const app = express();

//Middleware to enable CORS
app.use(cors());

//MiddleWARE TO parse Json data
app.use(express.json());

//Routes
app.use("/api/expenses", expenseRoutes);

//Database COnnection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Databae connected sucessfully");
    app.listen("3000", () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

module.exports = app;

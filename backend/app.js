const express = require('express');
const ErrorHandler = require("./middleware/error");

const app = express();

app.use(express.json());

// Route imports
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");

app.use("/api/v2", product);

app.use("/api/v2", user);

app.use(ErrorHandler);


module.exports = app;
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const { mongoURL, mongoOptions, connectCallback } = require("./configs/db.config");
const generalRouter = require("./routes/general");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");
const cartRouter = require("./routes/cart");
const varinatsRouter = require("./routes/variants");
const categoriesRouter = require("./routes/categories");
const departmentRouter = require("./routes/departments");

const app = express();
dotenv.config();

mongoose.set("debug", true);
mongoose.connect(mongoURL, mongoOptions, connectCallback);

app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", generalRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/users", cartRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/variants", varinatsRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/departments", departmentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	res.status(err.status || 500).json(err);
});

module.exports = app;

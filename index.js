const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const restorentRoute = require("./routes/restorent");
const razorpayRoute = require("./routes/razorpay");
const cors = require("cors");
require("dotenv").config();

app.listen(5000, () => {
  console.log("server running 5000");
});
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/restorent", restorentRoute);
app.use("/api/payment", razorpayRoute);

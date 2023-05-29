const Razorpay = require("razorpay");
const router = require("express").Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/", (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount, // Amount in paise or the smallest currency unit
    currency: "INR",
    receipt: "order_receipt",
  };

  razorpay.orders.create(options, (err, order) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Something went wrong!" });
    } else {
      res.json(order);
    }
  });
});
module.exports = router;

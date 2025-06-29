const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
  const { amount, token } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount: amount * 100, // amount in cents
      currency: "usd",
      source: token.id,
      description: "Service Payment"
    });
    res.status(200).json(charge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

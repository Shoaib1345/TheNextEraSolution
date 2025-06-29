const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ msg: "Message received" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

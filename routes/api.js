const express = require("express");

const router = express.Router();

const Adega25 = require("../models/adega25");

// Routes
router.get("/", (req, res) => {
  Adega25.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

router.post("/save", (req, res) => {
  const data = req.body;

  const newAdega25 = new Adega25(data);

  newAdega25.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    // Adega25
    return res.json({
      msg: "Your data has been saved!!!!!!",
    });
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "peterson",
    age: 5,
  };
  res.json(data);
});

module.exports = router;

const express = require("express");
const router = express.Router();

//const adega25 = require("../models/adega25");

// Routes
router.get("/example", (req, res) => {
  res.json({ message: "Welcome to the backend" });
});

/* router.get("/", (req, res) => {
  //res.json({ message: "Welcome to the backend" });
  adega25
    .find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}); */

router.get("/dishes", (req, res) => {
  const data = {
    name: "Sopa de feijão",
    value: "1,75",
  };
  res.json(data);
});

/* router.get("/", (req, res) => {
  console.log("XXXXXXXXXXXXXXX");
  adega25
    .find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}); */

/* router.post("/save", (req, res) => {
  //const data = req.body;

  //const data = req.body;
  const data = {
    products: {
      dishes: {
        of_the_day: {
          soup: {
            active: true,
            name: "Couve",
            value: "1,75",
          },
          date: {
            type: String,
            default: Date.now(),
          },
        },
      },
    },
  }; */

/* const newAdega25 = new adega25(data);

  newAdega25.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    // adega25
    return res.json({
      msg: "Your data has been saved!!!!!!",
    });
  });
}); */

module.exports = router;

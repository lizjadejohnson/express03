const express = require("express");
const router = express.Router(); //Needed to route
const drinks = require("../data/drinks"); //Needs access to our drinks data file

// Get ALL drinks:
router.get("/", (req, res) => {
  //app.get had to change to router.get
  res.json(drinks);
});

// Creating a simple GET route for individual drinks
// using a route parameter for the unique ID:
router.get("/:id", (req, res) => {
  //app.get had to change to router.get
  const drink = drinks.find((d) => d.id == req.params.id);
  if (drink) {
    res.json(drink);
  } else {
    res.status(404).send("Drink not found");
  }
});

//Need to export this for use in main app
module.exports = router;

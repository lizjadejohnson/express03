const express = require("express");
const router = express.Router(); //Needed to route
const foods = require("../data/foods"); //Needs access to our foods data file

// Get ALL foods:
router.get("/", (req, res) => {
  //app.get had to change to router.get
  res.json(foods);
});

// Creating a simple GET route for individual foods
// using a route parameter for the unique ID:
router.get("/:id", (req, res) => {
  //app.get had to change to router.get
  const food = foods.find((f) => f.id == req.params.id);
  if (food) {
    res.json(food);
  } else {
    res.status(404).send("Food not found");
  }
});

//Need to export this for use in main app
module.exports = router;

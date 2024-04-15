const express = require("express");
const router = express.Router(); //Needed to route
const desserts = require("../data/desserts"); //Needs access to our desserts data file

// Get ALL desserts:
router.get("/", (req, res) => {
  //app.get had to change to router.get
  res.json(desserts);
});

// Creating a simple GET route for individual desserts
// using a route parameter for the unique ID:
router.get("/:id", (req, res) => {
  //app.get had to change to router.get
  const dessert = desserts.find((d) => d.id == req.params.id);
  if (dessert) {
    res.json(dessert);
  } else {
    res.status(404).send("Dessert not found");
  }
});

//Need to export this for use in main app
module.exports = router;

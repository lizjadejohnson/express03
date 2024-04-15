const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Import from users and posts:
const drinkRoutes = require("./routes/drinks");
const foodRoutes = require("./routes/foods");
const dessertRoutes = require("./routes/desserts");

//Tell the Express application to use the router module stored in the variable drinkRoutes (defined above)
//for any HTTP request that starts with /api/drinks
app.use("/api/drinks", drinkRoutes);
//Same but for foods...
app.use("/api/foods", foodRoutes);
//Because we're using app.use as opposed to app.get for example, it will apply to all incoming requests
//you don't need to physically have an api folder in your project structure.
// The /api/drinks and /api/foods paths in your index.js file when setting up routes with Express
// are virtual paths defined for organizing and accessing your routes in a RESTful manner via HTTP requests.
// They do not correspond to actual directories in your file system.
app.use("/api/desserts", dessertRoutes);

const port = 3000;
// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

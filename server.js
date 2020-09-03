// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

// Step 1

const routes = require("./routes/api");
app.use(routes);

const MONGODB_URI =
  "mongodb+srv://adega25:ruadamoeda@adega.i30lz.mongodb.net/adega25?retryWrites=true&w=majority";

// Step 2
mongoose.connect(MONGODB_URI || "mongodb://localhost/adega25", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Step 3

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

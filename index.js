const express = require("express");
const cors = require("cors");

const chalk = require("chalk");
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.json([
    {
      name: "Rakib",
      email: "rakib@gmail.com",
    },
    {
      name: "Azmir Uddin Alif",
      email: "azmiruddin@gmail.com",
    },
    {
      name: "Shawon",
      email: "shawon@gmail.com",
    },
    {
      name: "Raihan Ahmed Sumon",
      email: "raihansumon@gmail.com",
    },
  ]);
});

app.listen(8000, () => {
  console.log(chalk.red("Server is running on port 8000"));
});

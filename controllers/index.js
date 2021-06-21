const path = require("path");

const homePage = (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname, "/index.html");
};

module.exports = homePage;

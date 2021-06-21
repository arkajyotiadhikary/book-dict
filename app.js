const express = require("express");
const app = express();
const router = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/", router);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("App is runnig");
});

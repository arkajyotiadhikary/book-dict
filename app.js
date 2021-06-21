const express = require("express");
const app = express();
const router = require("./routes/index");
const path = require("path");

app.set("views", path.join(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.use("/", router);

app.listen(5000, () => {
  console.log("App is runnig");
});

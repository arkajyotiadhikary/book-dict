const router = require("express").Router();

const homePage = require("../controllers/index");

router.route("/").get(homePage);

module.exports = router;

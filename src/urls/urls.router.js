//responsible for routing of urls
const router = require("express").Router();
const controller = require("./urls.controller");

router.route("/:urlId").get(controller.read);
router.route("/").get(controller.list).post(controller.create);

module.exports = router;
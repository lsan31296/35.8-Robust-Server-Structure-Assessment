//responsible for routing of urls
const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./urls.controller");

router.route("/:urlId").get(controller.read).put(controller.update).all(methodNotAllowed);
router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

module.exports = router;
//responsible for handling 'uses' resource
const router = require("express").Router({ mergeParams: true});
const controller = require("./uses.controller");

router.route("/").get(controller.list);

module.exports = router;

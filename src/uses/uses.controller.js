const uses = require("../data/uses-data");

function list(req, res) {
    res.json({ data: uses });
}

module.exports = {
    list,
}
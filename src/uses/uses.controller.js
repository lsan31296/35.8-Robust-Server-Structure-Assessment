const uses = require("../data/uses-data");

function list(req, res) {
    const { urlId } = req.params;
    res.json({ data: uses.filter(urlId ? use => use.urlId === Number(urlId) : () => true) });
}

module.exports = {
    list,
}
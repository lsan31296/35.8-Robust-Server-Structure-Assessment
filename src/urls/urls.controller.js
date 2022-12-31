//responsible for handling 'urls' resource
const { entries } = require("../data/urls-data");
const urls = require("../data/urls-data");

function list (req, res) {
    res.json({ data: urls});
}

function create(req, res) {
    const { data: { href } = {} } = req.body;
    const newUrl = {
        id: urls.length + 1,
        href
    };
    urls.push(newUrl);
    res.status(201).json({ data: { href: newUrl } });
}

function hasHref(req, res, next) {
    const { data: { href } = {} } = req.body;
    if (href) {
        return next();
    }
    next({ status: 400, message: "An 'href' property is required." });
}


module.exports= {
    list,
    create: [hasHref, create],
}
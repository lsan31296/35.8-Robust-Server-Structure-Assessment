//responsible for handling 'urls' resource
const { entries } = require("../data/urls-data");
const urls = require("../data/urls-data");
const uses = require("../data/uses-data");

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
    res.status(201).json({ data: newUrl });
}

function hasHref(req, res, next) {
    const { data: { href } = {} } = req.body;
    if (href) {
        return next();
    }
    next({ status: 400, message: "An 'href' property is required." });
}

function urlExists(req, res, next) {
    const { urlId } = req.params;
    const foundUrl = urls.find((url) => url.id === Number(urlId));
    if (foundUrl) {
        res.locals.url = foundUrl;
        return next();
    }
    next({ status: 404, message: `Url id not found: ${req.params.urlId}` });
}

function read(req, res) {
    //need to make a side effect that creates use records for a particular urlId in use-data, tracked by
    //the use metric and a 'time' property (set to Date.now()) indicating when the use metric was recorded.
    const { urlId } = req.params;
    const newUse = {
        id: uses.length+1,
        urlId: Number(urlId),
        time: Date.now(),
    };
    uses.push(newUse);
    res.json({ data: res.locals.url });
}

function update(req, res) {
    const { data: { href } = {} } = req.body;
    res.locals.url.href = href;
    res.json({ data: res.locals.url });
}

module.exports= {
    list,
    create: [hasHref, create],
    read: [urlExists, read],
    update: [hasHref, urlExists, update],
}
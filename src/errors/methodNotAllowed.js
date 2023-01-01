//responsible for displaying invalid HTTP requests when accurate
function methodNotAllowed(req, res, next) {
    next({ status: 405, message: `${req.method} is not allowed on ${req.originalUrl}` });
}
module.exports = methodNotAllowed;
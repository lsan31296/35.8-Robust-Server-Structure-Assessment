const express = require("express");
const app = express();
const urlsRouter = require("./urls/urls.router");

app.use(express.json());

// TODO: Add code to meet the requirements and make the tests pass.
app.use("/urls", urlsRouter);

//Not-Found Hanlder
app.use((req, res, next) => {
    return next({ status: 404, message: `Not found: ${req.originalUrl}` });
});
//Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    const { status = 500, message = "Something went wrong!" } = err;
    res.status(status).json({ error: message });
});

module.exports = app;

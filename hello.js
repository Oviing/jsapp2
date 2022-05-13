const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
    res.send("Hello Server");
});

server.listen(3000, () => {
    console.log("listen on server *: 3000");
});
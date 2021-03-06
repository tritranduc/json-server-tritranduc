// server.js
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
var router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
var port = process.env.PORT || 8080

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});

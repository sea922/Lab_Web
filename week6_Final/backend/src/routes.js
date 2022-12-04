let express = require('express');
let UsersController =  require("./controllers/users.js");
let MessagesController = require("./controllers/messages.js");
let RoomsController = require("./controllers/rooms.js");

const router = express.Router();

let routes = (app) => {

  router.post("/api/users/create", UsersController.create);
  router.post("/api/users/login", UsersController.login);
  router.post("/api/users/auth", UsersController.auth, UsersController.show);
  router.put("/api/users", UsersController.update);

  router.get("/api/messages", MessagesController.index);
  router.post("/api/messages", MessagesController.create);

  router.get("/api/rooms", RoomsController.index);
  router.post("/api/rooms", RoomsController.create);
  router.delete("/api/rooms", RoomsController.delete);
  router.put("/api/rooms", RoomsController.update);

  return app.use("/", router)
};

module.exports = routes;

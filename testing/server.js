import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("my_event", (msg) => {
    console.log("my_event " + msg);
    io.emit("my_event", msg);
  });
});

httpServer.listen(3000, () => {
  console.log("listening on localhost:3000");
});

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Server } from "socket.io";
import messageHandler from "../../lib/messageHandler";

export default function SocketHandler(req, res) {
 
    // It means that socket server was already initialised
    if (res.socket.server.io) {
        console.log("Already set up");
        res.end();
        return;
      }
    
      const io = new Server(res.socket.server);
      res.socket.server.io = io;
    
      const onConnection = (socket) => {
        messageHandler(io, socket);
      };
  // Define actions inside
    io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
    }
import { WebSocketServer } from "ws";
import { prisma } from "@gcp-turborepo/prisma/client";

const port = Number(process.env.PORT ?? 8080);
const server = new WebSocketServer({ port });

server.on("connection", async (socket) => {
  socket.send("Hello from server");
  try {
    await prisma.user.create({
      data: {
        email: "test@test.com",
        password: "test",
      },
    });
  } catch (error) {
    console.error("Failed to create test user", error);
  }
});

server.on("listening", () => {
  console.log(`WebSocket server is running on port ${port}`);
});

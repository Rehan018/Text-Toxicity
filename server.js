const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const toxicityRoutes = require("./routes/toxicity");
const cors = require("cors");
const socketIo = require("socket.io");
const http = require("http");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerOptions");
const socketMiddleware=require('./middleware/socket');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors({
  origin: "http://localhost:3000",
}));

const db = "mongodb://localhost:27017/toxicity_Analysis";

mongoose
  .connect(db, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(socketMiddleware(io));

app.use("/api", authRoutes);
app.use("/api", toxicityRoutes);

io.on("connection", (socket) => {
  console.log("new client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("message", (data) => {
    io.emit("message", data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

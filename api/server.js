// const express = require("express");
// const helmet = require("helmet");
// const cors = require("cors");

// const authRouter = require("../auth/auth-router.js");
// const usersRouter = require("../users/users-router.js");

// const server = express();

// server.use(helmet());
// server.use(express.json());
// server.use(cors());

// server.use("/api/auth", authRouter);
// server.use("/api/users", usersRouter);

// server.get("/", (req, res) => {
//   res.send("<h2>Hello from Web Auth III Challenge</h2>");
// });

// module.exports = server;

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/user-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;

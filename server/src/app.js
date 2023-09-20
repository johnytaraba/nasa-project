const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./routes/api");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

// Prefixing the api router to use with different versions of api
app.use("/v1", api);
// app.use("/v2", apiV2Router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;

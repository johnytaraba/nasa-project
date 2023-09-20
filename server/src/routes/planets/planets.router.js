const express = require("express");
const { htttpGetAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/", htttpGetAllPlanets);

module.exports = planetsRouter;

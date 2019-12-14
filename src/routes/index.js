'use strict'

const cors = require('cors');
const express = require('express');
const api = express.Router();

api.use(cors());
api.options('*', cors());

// ******* TEST ******
api.use("/hello", (req, res) => res.status(200).send("Hello world!"))
api.use("*", (req, res) => res.status(404).json({ error: "not found" }))

module.exports = api;

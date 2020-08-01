const express = require("express");

const db = require("../data/db-config.js");

const resource = require('./model.js');

const router = express.Router();

router.get("/", (req, res) => {
  resource.findResource()
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resource" });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;

  project.addResource(resourceData)
    .then(newResource => {
      res.status(201).json(newResource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

module.exports = router;

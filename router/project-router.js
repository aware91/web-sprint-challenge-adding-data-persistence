const express = require("express");

const db = require("../data/db-config.js");

const project = require('./model.js');

const router = express.Router();

router.get("/", (req, res) => {
  project.findProject()
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  project.addProject(projectData)
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ message: "Failed to create new project." });
    });
});


module.exports = router;

const express = require("express");

const db = require("../data/db-config.js");

const task = require('./model.js');

const router = express.Router();

router.get("/", (req, res) => {
  task.findTask()
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      console.log(err.message)
      res.status(500).json({ message: "Failed to get task" });
    });
});

router.post("/", (req, res) => {
  const taskData = req.body;

  task.addTask(taskData)
    .then(newTask => {
      res.status(201).json(newTask);
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ message: "Failed to create new task" });
    });
});

module.exports = router;

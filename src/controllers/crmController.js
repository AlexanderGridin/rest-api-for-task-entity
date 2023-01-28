import mongoose from "mongoose";
import { TaskSchema } from "../models/crmModel";

const Task = mongoose.model("Task", TaskSchema);

export const getTasks = (_req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) {
      res.send(err.errors);
    }

    res.json(tasks);
  });
};

export const getTask = (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) {
      res.send(err.errors);
    }

    res.json(task);
  });
};

export const addTask = (req, res) => {
  const task = new Task(req.body);
  task.save((err, task) => {
    if (err) {
      res.send(err.errors);
    }

    res.json(task);
  });
};

export const updateTask = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, task) => {
      /*
       * { new: true } means that will be returned updated task
       * */
      if (err) {
        res.send(err.errors);
      }

      res.json(task);
    }
  );
};

export const removeTask = (req, res) => {
  Task.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.send(err.errors);
    }

    res.json({
      message: `Task with id: ${req.params.id} was successfully removed`,
    });
  });
};

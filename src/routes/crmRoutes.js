import {
  addTask,
  getTask,
  getTasks,
  updateTask,
  removeTask,
} from "../controllers/crmController";

export const routes = (app) => {
  app
    .route("/tasks")
    .get((req, _res, next) => {
      console.log("Middleware example");
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request method ${req.method}`);

      next();
    }, getTasks)
    .post(addTask);

  app.route("/task/:id").get(getTask).put(updateTask).delete(removeTask);
};

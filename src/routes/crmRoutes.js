export const routes = (app) => {
  app
    .route("/tasks")
    .get((_req, res) => res.send("GET request works"))
    .post((_req, res) => res.send("POST request works"));

  app
    .route("/task/:id")
    .get((_req, res) => res.send("GET task by id works"))
    .put((_req, res) => res.send("PUT request works"))
    .delete((_req, res) => res.send("DELETE request works"));
};

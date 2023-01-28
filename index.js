import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { routes } from "./src/routes/crmRoutes";

const app = express();
const PORT = 4004;

// mongoose connection
mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/TasksDB", { useNewUrlParser: true });

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

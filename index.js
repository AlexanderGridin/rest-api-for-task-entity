import express from "express";
import { routes } from "./src/routes/crmRoutes";

const app = express();
const PORT = 4004;

routes(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

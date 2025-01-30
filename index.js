require("dotenv").config();
import express, { static, json } from "express";
import cors from "cors";
import { join } from "path";
import { info } from "./src/helpers/logger";
import routes from "./src/routes/index";

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors());

app.use(static(join(__dirname, "public")));

app.use(json());

app.use("/", routes);

app.listen(PORT, () => {
  info(
    `Server running on port ${PORT} - Environment: ${
      process.env.NODE_ENV || "development"
    }`
  );
});

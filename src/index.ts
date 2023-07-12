import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";

import App from "./app";

const NODE_ENV = process.env.NODE_ENV || "development";

if (NODE_ENV === "development") {
  try {
    const envPath = path.join(__dirname, "../.env");
    if (fs.existsSync(envPath)) {
      console.log("Importing env variables from .env.");
      dotenv.config({ path: envPath });
    }
  } catch (err) {
    throw new Error("Missing .env file.");
  }
}

const app = new App();
app.start();

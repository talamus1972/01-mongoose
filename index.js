import "dotenv/config";

const DB_URI = process.env.DB_URI;

import mongoose from "mongoose";

async function run() {
  try {
    await mongoose.connect(DB_URI);

    console.info("Database connection successfully");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}

run();

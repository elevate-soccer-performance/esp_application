import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import errorHandler from "./src/util/error.js";

// Initialize App
const app = express();

// Initialize Global Varibales
dotenv.config({ path: "./src/config/config.env" });

// Initialize MongoDB
connectDB();

// Initialize Express JSON
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// Import Routes
import auth from "./src/routes/auth-routes/auth_routes.js";

// Initialize Port
const PORT = process.env.PORT || 5000;

// Development Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount Routes onto App
app.use("/api/v1/auth", auth);

// Utilize Error Handler
app.use(errorHandler);

// Launch Server
app.listen(
  PORT,
  console.log(
    `Node is Running in ${process.env.NODE_ENV} on Port ${PORT}`.yellow
      .underline
  )
);

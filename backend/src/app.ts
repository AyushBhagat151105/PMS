import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { config } from "dotenv";
import logger from "./utils/logger";
import swaggerUi from "swagger-ui-express";
import specs from "./config/swagger";
// Load environment variables
config();

// Initialize Express app
const app: Application = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet()); // Security headers
app.use(compression()); // Compress responses

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server is running");
});

// In app.ts, after the middleware setup
import apiCheck from "./routes/helthcheck.route";

// API routes
app.use("/api/v1", apiCheck);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error: ${err.message}`);

  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

export default app;

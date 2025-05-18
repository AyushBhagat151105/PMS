import { Router } from "express";

const apiCheck = Router();

// Example route
apiCheck.get("/status", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is operational",
    timestamp: new Date(),
  });
});

export default apiCheck;

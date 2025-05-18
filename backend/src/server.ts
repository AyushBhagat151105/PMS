import app from "./app";
import logger from "./utils/logger";

// Get port from environment variables or use default
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

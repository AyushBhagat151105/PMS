import swaggerJsdoc from "swagger-jsdoc";
import { version } from "../../package.json";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express TypeScript API",
      version,
      description: "API documentation for Express TypeScript server",
      license: {
        name: "MIT",
      },
      contact: {
        name: "API Support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the API docs
};

const specs = swaggerJsdoc(options);

export default specs;

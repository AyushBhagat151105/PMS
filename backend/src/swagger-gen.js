import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "PMS Api",
    description: "Description",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["./app.ts"];

swaggerAutogen(outputFile, routes, doc);

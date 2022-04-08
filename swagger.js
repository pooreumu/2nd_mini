const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "2nd mini API",
    description: "Description",
  },
  host: `localhost:${process.env.PORT}`,
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);

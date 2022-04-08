const express = require("express");
const app = express();
const router = express.Router();

const connect = require("./schemas");
connect();

require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output");

const request_middleware = (req, res, next) => {
  console.log("Request URL:", req.originalUrl, " - ", new Date());
  next();
};

app.disable("x-powered-by");
app.use(request_middleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(process.env.PORT, () => {
  console.log("서버가 켜졌어요");
});

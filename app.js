const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./schemas");
connect();

require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output");

const usersRouter = require("./routers/users");
const restaurantsRouter = require("./routers/restaurants");

const request_middleware = (req, res, next) => {
    console.log("Request URL:", req.originalUrl, " - ", new Date());
    next();
};

app.use(cors());
app.disable("x-powered-by");
app.use(request_middleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/restaurants", [restaurantsRouter]);
app.use("/users", [usersRouter]);

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(process.env.PORT, () => {
    console.log("서버가 켜졌어요");
});

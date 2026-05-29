const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const errorMiddleware = require("./middleware/errorMiddleware");

const organsisationRoutes = require("./modules/organization/organization.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is HealthCheck ROUTE for Server and it is Up and running",
  });
});

app.use("/api/v1/organization", organsisationRoutes);

app.use(errorMiddleware);

module.exports = app;

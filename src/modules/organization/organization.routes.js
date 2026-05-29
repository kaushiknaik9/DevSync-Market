const express = require("express");

const organsisationControllers = require("./organization.controller");
const { router } = require("../../app");

router = express.Router();

router.post("/", organsisationControllers.createOrganization);

module.exports = router;

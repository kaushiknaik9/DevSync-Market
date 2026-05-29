const asyncHandler = require("../../utils/asyncHandler");
const AppError = require("../../errors/AppError");

const organizationService = require("./organization.service");

const createOrganization = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new AppError("Organization name required", 400);
  }

  const organization = organizationService.createOrganization({ name });

  res.status(201).json({
    success: true,
    message: "Organization Created Success",
    data: organization,
  });
});

module.exports = { createOrganization };

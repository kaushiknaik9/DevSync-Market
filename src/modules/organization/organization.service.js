const prisma = require("../../config/db");

const createOrganization = async (data) => {
  return prisma.organization.create({
    data,
  });
};

module.exports = createOrganization;

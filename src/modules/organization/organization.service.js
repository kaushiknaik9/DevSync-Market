const createOrganization = async (name) => {
  return {
    id: Date.now(),
    name,
  };
};

module.exports = createOrganization;

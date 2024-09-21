const City = require("../models/city");

const getAllCities = async () => {
  const cities = await City.find({});
  const response = {
    cities: cities.map((city) => ({
      cityId: city._id,
      name: city.name,
      state: city.state,
    })),
  };
  console.log(response)
  return response;
};

module.exports = { getAllCities };

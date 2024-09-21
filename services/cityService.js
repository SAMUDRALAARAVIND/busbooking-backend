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
  const data = response.cities
  console.log(response.cities)
  return data;
};

module.exports = { getAllCities };

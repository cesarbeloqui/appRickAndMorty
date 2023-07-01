const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const ID = req.params.id;
  try {
    const response = await axios.get(URL + ID);
    const { id, name, gender, species, origin, image, status } = response.data;
    const character = { id, name, gender, species, origin, image, status };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error.response.data);
  }
};

module.exports = getCharById;

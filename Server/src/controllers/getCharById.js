//const axios = require("axios");
//const URL = "https://rickandmortyapi.com/api/character/";
const { Character } = require("../DB_connection");

const getCharById = async (req, res) => {
  const id = req.params.id;
  try {
    const { dataValues } = await Character.findOne({ where: { id } });
    if (dataValues) {
      res.status(200).json(dataValues);
    } else {
      res
        .status(400)
        .json({
          error: "No se encontró ningún personaje con el ID proporcionado.",
        });
    }
  } catch (error) {
    console.error("Error al obtener el personaje:", error);
  }
  // try {
  //   const response = await axios.get(URL + ID);
  //   const { id, name, gender, species, origin, image, status } = response.data;
  //   const character = { id, name, gender, species, origin, image, status };
  //   res.status(200).json(character);
  // } catch (error) {
  //   res.status(500).json(error.response.data);
  // }
};

module.exports = getCharById;

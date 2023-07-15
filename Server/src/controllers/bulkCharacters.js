const { Character } = require("../DB_connection");
const data = require("../data/characters.json");
const copydata = [...data];

const bulkCharacters = async (req_, res) => {
  for (let i = 0; i < copydata.length; i++) {
    const { name, status, species, gender, origin, image } = copydata[i];
    await Character.create({ name, status, species, gender, origin, image });
  }

  //   Character.bulkCreate(copydata, {
  //     attributes: ["name", "status", "species", "gender", "origin", "image"],
  //   })
  //     .then(() => {
  //       res
  //         .status(200)
  //         .json({ message: "Operación de inserción masiva completada." });
  //     })
  //     .catch((error) => {
  //       res
  //         .status(400)
  //         .json({ message: "Error al realizar la inserción masiva:", error });
  //     });
};

module.exports = bulkCharacters;

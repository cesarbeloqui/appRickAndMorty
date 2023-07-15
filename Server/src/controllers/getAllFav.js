const {Favorite} = require("../DB_connection");

const getAllFav = async (_req, res) => {
  try {
    const allFavorite = await Favorite.findAll();
    res.status(200).json(allFavorite);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getAllFav;

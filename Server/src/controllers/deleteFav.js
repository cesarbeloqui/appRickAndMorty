const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFav = await Favorite.destroy({ where: { id } });
    if (deletedFav) {
      const allFavorite = await Favorite.findAll();
      res.status(200).json(allFavorite);
    } else {
      res.status(404).json(new Error("Favorito no encontrado"));
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = deleteFav;

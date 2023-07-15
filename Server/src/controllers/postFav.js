const { Favorite, User, Character } = require("../DB_connection");

const findOrCreateFavorite = async (idCharacter) => {
  let favorite;

  const existingFavorite = await Favorite.findOne({
    where: { id: idCharacter },
  });

  if (existingFavorite) {
    favorite = existingFavorite.dataValues;
  } else {
    const character = await Character.findOne({
      where: { id: idCharacter },
    });

    if (character) {
      favorite = character.dataValues;
      // Crear el favorito para asociar
      await Favorite.create({ ...favorite });
    } else {
      throw new Error("El personaje no existe");
    }
  }

  return favorite;
};

const postFav = async (req, res) => {
  const { idUser, idCharacter } = req.body;
  try {
    if (idUser && idCharacter) {
      // Verificar si el usuario existe
      const user = await User.findByPk(idUser);
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      // Verificar si el favorito ya existe, si existe le asocia el valor
      //mas adelante, si no existe, busca en la tabla Character el personaje
      //trae todos sus datos y le asigna el valor a favorite, si el personaje
      //no existe en la serie, arroja un json

      try {
        const favorite = await findOrCreateFavorite(idCharacter);
        //verifica si el favorito ya existe dentro del usuario si no
        const beforeFavorites = await user.getFavorites();
        const aux = beforeFavorites.find((fav) => fav.id === idCharacter);
        if (aux) {
          const favorites = await user.getFavorites();
          res.status(200).json(favorites);
        }
        await user.addFavorite(favorite.id);
        const favorites = await user.getFavorites();
        res.status(200).json(favorites);
      } catch (error) {
        // Manejo del error
        res.status(400).json(error.message);
      }
    } else {
      res.status(401).json({ error: "Faltan datos" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = postFav;

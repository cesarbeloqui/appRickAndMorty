let myFavorites = [
  {
    id: 827,
    name: "Cesar Beloqui",
    gender: "Male",
    species: "Human",
    origin: {
      name: "Earth (C-1)",
    },
    image: "https://i.ibb.co/WBgrvXf/gorickyourself.jpg",
    status: "Casi Vivo",
  },
];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  res.status(201).json(myFavorites);
};
const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((character) => character.id != id);
  res.status(200).json(myFavorites);
};

const getFav = (req, res) => {
  res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav, getFav };

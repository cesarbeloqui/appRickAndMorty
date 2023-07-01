const { Router } = require("express");

const getCharById = require("../controllers/getCharById");
const {
  postFav,
  deleteFav,
  getFav,
} = require("../controllers/handleFavorites");
const login = require("../controllers/login");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.delete("/fav/:id", deleteFav);
router.post("/fav", postFav);
router.get("/fav", getFav);

module.exports = router;

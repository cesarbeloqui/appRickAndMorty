const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const getAllFav = require("../controllers/getAllFav");
const bulkCharacter = require("../controllers/bulkCharacters");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.delete("/fav/:id", deleteFav);
router.post("/fav", postFav);
router.get("/fav", getAllFav);
router.get("/bulkCharacter", bulkCharacter);

module.exports = router;

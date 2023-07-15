const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const [newUser, created] = await User.findOrCreate({
        where: { email, password },
      });
      if (created) {
        res.status(200).json({ newUser, created });
      } else {
        res.status(409).json({ newUser, created });
      }
    } else {
      res.status(400).json({ error: "Faltan datos" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = postUser;

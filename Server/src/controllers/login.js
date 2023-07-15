const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user) {
        if (user.password === password) {
          res.status(200).json({ access: true });
        } else {
          res
            .status(403)
            .json({ access: false, error: "Contraseña incorrecta" });
        }
      } else {
        res.status(404).json({ access: false, error: "Usuario no encontrado" });
      }
    } else {
      res.status(400).json({ access: false, error: "Faltan datos" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = login;

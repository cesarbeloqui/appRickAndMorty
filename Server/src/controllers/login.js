const users = require("../utils/users");

const getUser = (email, password) => {
  if (!email || !password || email === "" || password === "") {
    throw Error("Falta 'email' y 'password'");
  }
  const filteredUser = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (filteredUser.length > 0) {
    return filteredUser;
  } else {
    throw Error("No existe ningun usuario con este email y contraseña");
  }
};

const login = (req, res) => {
  const { email, password } = req.query;
  try {
    const user = getUser(email, password);
    res.status(200).json({ access: true });
  } catch (error) {
    res.status(400).json({ access: false, error: error.message });
  }
};
module.exports = login;

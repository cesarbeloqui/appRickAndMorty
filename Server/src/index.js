const server = require("./app");
const { conn } = require("./DB_connection");
const PORT = 3001;

conn.sync({ force: false }).then(() => { //si esta en true, al conectarse empieza de cero con los modelos y en false lo contrario
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});

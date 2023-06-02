import "./App.css";
import "./components/Body/body.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";
import Form from "./components/Form/Form";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "";
  const CONTRASEÑA = "";
  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  function login(userData) {
    if (userData.email === EMAIL && userData.password === CONTRASEÑA) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logout() {
    setAccess(false);
  }
  const deleteAll = () => {
    setCharacters([]);
  };

  const onSearch = (id) => {
    const URL_BASE = "https://rickandmortyapi.com/api";
    fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (
          data.name &&
          !characters.find((character) => character.id === data.id)
        ) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salio mal");
        }
      });
  };
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };
  const validation = useLocation().pathname;

  return (
    <div className="App">
      {validation !== "/" && (
        <Nav onSearch={onSearch} deleteAll={deleteAll} logout={logout} />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

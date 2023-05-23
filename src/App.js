import "./App.css";
import "./components/Body/body.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [characters, setCharacters] = useState([]);

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

  return (
    <div className="App">
      <Nav onSearch={onSearch} deleteAll={deleteAll} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
        path="/"
        element={<Cards characters={characters} onClose={onClose} />}
        exact
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

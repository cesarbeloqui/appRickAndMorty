import "./App.css";
import "./components/Body/body.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

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
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;

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
import axios from "axios";
import { BASE_URL } from "./falseEnv";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  async function login(userData) {
    const { email, password } = userData;
    const URL = `${BASE_URL}/rickandmorty/login/`;
    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    //   const { access } = data;
    //   setAccess(data);
    //   access && navigate("/home");
    // });
    try {
      // la logica de qué está en el alert, está en el servidor
      const response = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      setAccess(response.data);
      navigate("/home");
    } catch (error) {
      alert(error.response.data.error);
    }
  }
  function logout() {
    setAccess(false);
  }
  const deleteAll = () => {
    setCharacters([]);
  };

  const onSearch = async (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    const ID = id;
    // fetch(`${URL_BASE}/character/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (
    //       data.name &&
    //       !characters.find((character) => character.id === data.id)
    //     ) {
    //       setCharacters((oldChars) => [...oldChars, data]);
    //     } else {
    //       alert("Caracter ya agregado");
    //     }
    //   });
    try {
      const response = await axios.get(`${URL_BASE}/character/${ID}`);
      try {
        const { data } = response;
        if (
          data.name &&
          !characters.find((character) => character.id === data.id)
        ) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          throw new Error("Caracter ya agregado");
        }
      } catch (error) {
        alert(error.message);
      }
    } catch (error) {
      alert(`No existe caracter con el ${ID}, los caracteres son hasta el 826`);
    }
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

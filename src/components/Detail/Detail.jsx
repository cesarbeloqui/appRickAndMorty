import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  console.log(character.origin);
  return (
    <div>
      {character.name ? (
        <div className={style.detail}>
          <div>
            <h1>Name: {character.name}</h1>
            <h3>ID: {character.id}</h3>
            <h3>Status: {character.status}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Genero: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
          </div>
          <div>
            <img src={`${character.image}`} className={style.img} alt="" />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

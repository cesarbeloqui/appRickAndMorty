import React, { useState } from "react";
//import styles from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/action";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value)); // Dispatch de la acción
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value)); // Dispatch de la acción
  };

  const [aux, setAux] = useState(false);

  return (
    <>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.container}>
        {favorites.map((char) => {
          return (
            <>
              <Card
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                gender={char.gender}
                origin={char.origin.name}
                image={char.image}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;

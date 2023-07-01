import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useState, useEffect } from "react";

//hola
function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    allCharacters,
  } = props;

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCharacters]);

  const [isFav, setIsFav] = useState(false);
  const [imagenLoaded, setImageLoaded] = useState(false);
  const imagen = new Image();
  imagen.src = image;

  imagen.onload = () => {
    setImageLoaded(true);
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        addFav,
        removeFav,
        allCharacters,
      });
    }
  };
  return (
    <div>
      {imagenLoaded ? (
        <div className={style.conteiner}>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          <div className={style.conteiner2}>
            <button
              className={style.button}
              onClick={() => {
                onClose(id);
              }}
            >
              X
            </button>
            <img className={style.img} src={image} alt={`${name}`} />
            <Link to={`/detail/${id}`}>
              <h2 className={style.name}>{name}</h2>
            </Link>
          </div>
          <div className={style.datos}>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <h3>{origin.name}</h3>
          </div>
        </div>
      ) : (
        <div className={style.conteiner}>
          <div className={style["loader-container"]}>
            <div className={style["lds-roller"]}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

//esta funcion recibe como parametro la funcion dispatch que a su vez recibe como parametro una funcion que crea una
//action que estan definidas en el archivo action.js
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    allCharacters: state.allCharacters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

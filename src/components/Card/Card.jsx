import { Link } from "react-router-dom";
import style from "./Card.module.css";



//hola
export default function Card({id, name, status, species, gender, origin, image, onClose}) {

  
    return (
      <div>
         <div className={style.conteiner}>
            <div className={style.conteiner2}>
            <button className={style.button} onClick={() => {onClose(id)}}>
             X
            </button>
            <img className={style.img} src={image} alt={`${name}`}/>
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
       </div>
    );
}

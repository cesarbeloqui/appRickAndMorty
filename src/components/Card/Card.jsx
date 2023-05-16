import style from "./Card.module.css";



//hola
export default function Card({name, status, species, gender, origin, image, onClose}) {
/*    return (
      <div>
         
         {/* <button onClick={}>X</button>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <h2></h2>
         <img src={} alt='' />}
      </div>
   ) */


   const handleClose = () => {
      onClose();
    };
  
    return (
      <div>
         <div className={style.conteiner}>
            <div className={style.conteiner2}>
            <button className={style.button} onClick={handleClose}>
             X
            </button>
            <img className={style.img} src={image} alt={`${name}`}/>
            <h2 className={style.name}>{name}</h2>
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

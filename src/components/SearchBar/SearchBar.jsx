import style from './SearchBar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';


export default function SearchBar(props) {
   const [id, setId] = useState("")
   const inputRef = useRef(null);
   const handChange = (event) => { 
      setId(event.target.value)
    }
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        // Llamar a la función que deseas disparar aquí
        props.onSearch(id);
        setId("");
        
        
      }
    }
   return (
      <div className={`row g-3 ${style.div}`}>
         <div className="col-auto">
            <input value={id} type="search" className="form-control" placeholder="Agregar" onChange={handChange} onKeyDown={handleKeyDown} ref={inputRef}/>
         </div>
         <div className="col-auto">
            <button onClick={()=>{
               props.onSearch(id); 
               setId("");
               inputRef.current.focus();
               }
               } className="btn btn-primary mb-3">Agregar</button>
         </div>
         <div className="col-auto">
            <button onClick={()=>{props.onSearch(Math.ceil(Math.random()*826))}} className="btn btn-primary mb-3">Agregar Random</button>
         </div>
         <div className="col-auto">
            <button onClick={()=>{props.deleteAll()}} className="btn btn-primary mb-3">Borrar todo</button>
         </div>
      </div>
   );
}


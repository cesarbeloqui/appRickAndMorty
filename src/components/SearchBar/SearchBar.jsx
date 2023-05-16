import style from './SearchBar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SearchBar(props) {
   const onSearch = () => window.alert('cambia esto por props')//props
   return (
      <div className={`row g-3 ${style.div}`}>
         <div className="col-auto">
            <input type="search" className="form-control" placeholder="Agregar" />
         </div>
         <div className="col-auto">
            <button onClick={onSearch} className="btn btn-primary mb-3">Agregar</button>
         </div>
      </div>
   );
}


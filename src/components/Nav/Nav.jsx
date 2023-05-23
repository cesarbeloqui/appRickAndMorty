import SearchBar from "../SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
// props = {onSearch:onSearch}
import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className={`row g-3 ${style.div}`}>
      <div className="col-auto">
        <Link to="/about">
          <button className="btn btn-primary mb-3">About</button>
        </Link>
      </div>
      <div className="col-auto">
        <Link to="/home">
          <button className="btn btn-primary mb-3">Home</button>
        </Link>
      </div>
      <div className={`col-auto ${style.search}`}>
        <SearchBar onSearch={props.onSearch} deleteAll={props.deleteAll} />
      </div>
    </div>
  );
};

export default Nav;

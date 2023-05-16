import SearchBar from "../SearchBar/SearchBar";
// props = {onSearch:onSearch}
import React from 'react'

const Nav = (props) => {
  return (
    <div>
    <SearchBar onSearch={props.onSearch} deleteAll={props.deleteAll}/>
    </div>
  )
}

export default Nav

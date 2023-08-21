import React from 'react'
import { LuSearch } from 'react-icons/lu'
import style from './search.module.css'


function SearchBar() {

  return (
    <form className={style.searchBar}>
      <button type="submit" className={style.search__button}>
        <LuSearch />
      </button>
      <input
        type="search" 
        placeholder="Olá! O que você precisa encontrar hoje?"
        className={style.search__input}       
        required
      />
    </form>
  )
}

export default SearchBar

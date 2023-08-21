import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import style from './header.module.css'
import CartButton from '../CartButton/CartButton'
import { BiUser } from 'react-icons/bi'


function Header() {
  return (
    <>
    <header className={style.header}>
      <div className="container">
        <img src="/img/logo.png" alt="logo" className={style.logo} />
        <SearchBar />
        <div className={style.login}>
          <div>
            <BiUser />
          </div>
          Acessar minha conta
        </div>
        <CartButton />
      </div>
    </header>

    </>
  )
}

export default Header

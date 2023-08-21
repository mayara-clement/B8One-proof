import React, { useContext } from 'react'
import style from './addToCart.module.css'
import AppContext from '../../context/AppContext'

function AddToCart({ data }) {
  const { AddToCart, setIsCartVisible } = useContext(AppContext)

  const handleAddCart = () => {
    AddToCart({ ...data, quantity: 1 })
    setIsCartVisible(true)
  }
  

  return (
    <button
    type="button"
    className={style.button__addToCart}
    onClick={handleAddCart}
  >
    Adicionar
  </button>
  )
}

export default AddToCart

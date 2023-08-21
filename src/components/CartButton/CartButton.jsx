import React, { useContext } from 'react'
import style from './cartButton.module.css'
import { PiShoppingCartSimple } from 'react-icons/pi'
import AppContext from '../../context/AppContext'

function CartButton() {
  const { cartItems, setIsCartVisible, isCartVisible } = useContext(AppContext)

  
  

  return (
    <button type="button" className={style.cart__button} onClick={() => setIsCartVisible(!isCartVisible)}>
      <PiShoppingCartSimple />

      {cartItems.length > 0 && (
        <span className={style.cart__status}>{cartItems.length}</span>
      )}
    </button>
  )
}

export default CartButton

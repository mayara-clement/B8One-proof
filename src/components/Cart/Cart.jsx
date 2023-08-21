import React, { useContext } from 'react'
import style from './cart.module.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'
import { IoIosClose } from 'react-icons/io'

function Cart() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return (
    <>
      <section
        className={`${style.cart} ${isCartVisible ? style.cartActive : ''}`}
      >
        <div className={style.cartTop}>
          <span>Minhas compras</span>
          <button
            className={style.closeIcon}
            onClick={() => setIsCartVisible(!isCartVisible)}
          >
            <IoIosClose />
          </button>
        </div>
        <div className={style.cartItems}>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} data={cartItem} />
          ))}
        </div>
        <div className={style.resume}>
          <div className={style.resumePrice}>
          <p>Subtotal</p>
          <span>{formatCurrency(totalPrice, 'BRL')}</span>
          </div>
          <div>
            <button className={style.goToCart}>Ir para o carrinho</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart

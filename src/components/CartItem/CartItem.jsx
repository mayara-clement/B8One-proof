import React, { useContext, useState } from 'react';
import style from './cartItem.module.css';
import { FiTrash2 } from 'react-icons/fi';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {
  const { id, title, thumbnail, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const [quantity, setQuantity] = useState(data.quantity);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <section className={style.cartItem}>
      <img src={thumbnail} alt="product" className={style.cartItemImage} />
      <div className={style.cartItemContent}>
        <h3 className={style.cartItemTitle}>{title}</h3>
        <div className={style.containerPrice}>
          <h3 className={style.cartItemPrice}>
            {formatCurrency(price, 'BRL')}
          </h3>
          <select
            value={quantity}
            onChange={handleQuantityChange}
            className={style.quantitySelect}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="button"
        className={style.buttonRemoveItem}
        onClick={handleRemoveItem}
      >
        <FiTrash2 />
      </button>
    </section>
  )
}

export default CartItem;

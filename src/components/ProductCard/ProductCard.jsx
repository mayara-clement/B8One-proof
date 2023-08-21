import React, { useContext, useState } from 'react'
import style from './productCard.module.css'
import formatCurrency from '../../utils/formatCurrency'
import AddToCart from '../AddToCart/AddToCart'
import AppContext from '../../context/AppContext'

function ProductCard({ data }) {
  const { title, thumbnail, price, listPrice, gramsToUnitRatio, discount } = data

  const discountFlag = Math.round((listPrice * discount) )
  const weightOptions = Array.from(
    { length: 5 },
    (_, index) => (index + 1) * (gramsToUnitRatio * 2)
  )

  const { age } = useContext(AppContext)

  const [selectedWeight, setSelectedWeight] = useState(weightOptions[0])

  const handleWeightChange = event => {
    const newWeight = parseFloat(event.target.value)
    setSelectedWeight(newWeight)
  }

  const recalculatedPrice = price * (selectedWeight / gramsToUnitRatio)

  return (
    <section className={style.productCard}>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className={style.card__image}
      />
      <div className={style.card__infos}>
        <h2 className={style.card__title}>{title}</h2>
        {age > 65 && (
          <span className={style.card__listPrice}>
            {formatCurrency(listPrice, 'BRL')}
          </span>
        )}
        <div className={style.card__priceContainer}>
          <h2 className={style.card__price}>
            {formatCurrency(recalculatedPrice, 'BRL')}
          </h2>
          {age > 65 && (
            <p className={style.card__flagPercentage}>-{discountFlag}%</p>
          )}
        </div>
        <span className={style.card__flagDiscount}>Compre 2 leve 3!</span>
        <p>Selecione o peso</p>
        <select
          id="weight-select"
          onChange={handleWeightChange}
          value={selectedWeight}
          className={style.selectWeight}
        >
          <option value="" disabled>
            Selecione
          </option>
          {weightOptions.map((weight, index) => (
            <option key={index} value={weight}>
              {`${weight} gramas`}
            </option>
          ))}
        </select>
      </div>
      <AddToCart data={{ ...data, price: recalculatedPrice }} />
    </section>
  )
}

export default ProductCard

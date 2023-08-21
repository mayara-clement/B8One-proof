import React from 'react'
import style from './ListDiscount.module.css'
import FlagDiscount from '../../assets/svg/FlagDiscount'
import FlagStar from '../../assets/svg/FlagStar'
import FlagEnergy from '../../assets/svg/FlagEnergy'
import FlagCard from '../../assets/svg/FlagCard'

const BenefitsBar = () => {
  const discounts = [
    { text: 'Descontos todos os dias!', icon: <FlagDiscount /> },
    { text: 'Maior variedade de produtos frescos e naturais', icon: <FlagStar /> },
    { text: 'Entrega rápida para a Grande São Paulo', icon: <FlagEnergy /> },
    { text: 'Pagamento seguro no PIX e Cartão', icon: <FlagCard />},
  ];

  return (
    <div className="container">
      <div className={style.listDiscount}>
      <ul>
          {discounts.map((discount, index) => (
            <li key={index}>
              {discount.icon}
              {discount.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BenefitsBar

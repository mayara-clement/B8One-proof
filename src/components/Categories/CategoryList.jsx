import React from 'react'
import style from './categoriesList.module.css'


const CategoryList = () => {
  const categories = [
    'Mercearia',
    'Hortifruti',
    'Carnes e Aves',
    'Padaria',
    'Bebidas',
    'Congelados',
    'Frios e Laticinios',
    'Saúde e Bem Estar',
    'Limpeza e Higiene',
    'Importados'
  ]

  return (
    <div className="container">
      <div className={style.categoriesList}>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoryList

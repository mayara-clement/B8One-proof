import React, { useEffect, useContext } from 'react'
import style from './products.module.css'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext)


  useEffect(() => {
    const products = fetchProducts()
    
    setProducts(products)
    setLoading(false)
  }, [])


  return (
    (loading && <Loading />) || (
      <section className={'container'}>
        <div className={style.productsSection}>
          <h2>Destaques da semana</h2>
          <span>Ofertas que vão deixar sua semana ainda mais especial.</span>
        </div>
        <div className={style.products}>
          {products.slice(0, 6).map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </section>
    )
  )
}

export default Products

import React, { useState } from "react";
import AppContext from "./AppContext";


function Provider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [age, setAge] = useState(null);
  const [showModal, setShowModal] = useState(true); 


  const AddToCart = (product, quantity) => {
    const mappedProduct ={
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      quantity: product.quantity,
      price: product.price
    }

    const productExist = cartItems.find(item => item.id === mappedProduct.id)

    if (!productExist) {
      setCartItems([...cartItems, mappedProduct])
      return
    }
    
    cartItems.forEach(function (item) {
      if(mappedProduct.id === item.id){
        item.quantity = quantity ? quantity : item.quantity + 1
      }
    })

    setCartItems([...cartItems])
  }

  const value = {
    products,
    setProducts,
    loading,
    cartItems, 
    setCartItems,
    setLoading,
    isCartVisible, 
    setIsCartVisible,
    AddToCart,
    age, 
    setAge,
    showModal, 
    setShowModal,
  }

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  )
}

export default Provider


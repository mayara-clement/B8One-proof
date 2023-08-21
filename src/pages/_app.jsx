import React from 'react'
import Header from '../components/Header/Header'
import Provider from '../context/Provider'

import '../styles/globals.css'
import Cart from '../components/Cart/Cart'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Header />
        <Cart />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

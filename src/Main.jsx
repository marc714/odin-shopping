import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ReactDOM } from 'react'; // error duplicate from above.
import App from './App.jsx'
import './index.css'
// import { Router } from './Router.jsx';
import Router from './Router.jsx'
import CartContext from './context/CartContext.jsx'
import CartContextProvider from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CartContext> */}
    <CartContextProvider>
      <Router />
    </CartContextProvider>
    {/* </CartContext> */}
  </React.StrictMode>,
)

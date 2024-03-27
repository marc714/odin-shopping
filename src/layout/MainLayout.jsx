import React, { useState, useEffect, createContext } from 'react';
import { Outlet } from "react-router-dom";
// import ShoppingCart from '../components/ShoppingCart';
import Header from "./Header";


// https://stackoverflow.com/questions/65284652/is-it-a-correct-approach-to-pass-usestate-setter-to-a-child-for-updating-parents

// custom hooks web dev simplified - a custom shopping cart hook with state inside it would have been way easier.

const MainLayout = () => {
    // const storedCart = localStorage.getItem("cart")
    // const [cart, setCart] = useState(JSON.parse(storedCart) || [])
    // const [cart, setCart] = useState(1)

    // useEffect(()=> {
    //   localStorage.setItem("cart", JSON.stringify(cart))
    // }, [cart]);

    // const value = {
    //     state: { cart },
    //     actions: { setCart }    
    // };

    return (
        <>
            {/* <CartContext.Provider> */}
            {/* <Provider> */}
                <Header />
                <Outlet />
            {/* </Provider> */}
            {/* </CartContext.Provider> */}
        </>
    )
}

export default MainLayout;
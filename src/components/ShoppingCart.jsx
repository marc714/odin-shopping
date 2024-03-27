// this component display the live count of items in cart
// goes inside Header
// on click displays ShoppingCart page
import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../layout/MainLayout";
import CartContext from "../context/CartContext";

export const ShoppingCart = () => {
    // const [cart, setCart] = useContext(CartContext);
    
    // useEffect(()=> {
    //     if(true) {
    //         setCart(
    //             [
    //                 ...cart,
    //                 {"product": "m1 jacket"},
    //                 {"product": "necklace"}
    //             ]
    //         )     
    //     }
    // }, [])

    const {cart, setCart} = useContext(CartContext);
    
    function temp() {
        console.log(cart)
    }


    return (
        <>
            {/* cart quantity: {bags} */}
            <button onClick={()=> console.log(artist)}>Click me</button>
        </>
    )
}


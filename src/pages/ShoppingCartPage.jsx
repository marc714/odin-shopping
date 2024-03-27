import React, { useContext } from "react";
// import context from MainLayout (yes a custom hook would have been simpler)
// import { CartContext } from "../layout/MainLayout";



// should also display count of items in cart
// this component displays to a full screen page
export default function ShoppingCartPage() {    

    // const [cart, setCart] = useContext(CartContext);

    function temp() {
        // let jizz = cart + 1;
        // setCart(jizz)
        setCart(()=> {
            cart.push({name: "empty"})
        })
    }

    return (
        <>
            <div>Cart No: {cart}</div>
            <button onClick={()=> temp()}>Click me</button>
        </>
    )
}
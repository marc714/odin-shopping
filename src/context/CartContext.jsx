// the custom hook version of CartContext (he uses TypeScript)
// https://www.youtube.com/watch?v=I7dwJxGuGYQ&t=108s

// https://www.youtube.com/watch?v=t9WmZFnE6Hg

import React, { createContext, useContext, useState} from "react";

export const CartContext = createContext(null);

export default function CartContextProvider ({ children }) {
    const [cart, setCart] = useState("friends");

    return (
        <CartContext.Provider 
            value={{
                cart,
                setCart,
            }}>
            
            {children}
        </CartContext.Provider>
    )
}

//4:50 whenever he creates a context, in the same file, he creates a custom hook shown below for consuming the context:

export function useCartContext() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error(
            "useCartContext must be used within a CartContextProvider"
        );
    }
    return context;
}
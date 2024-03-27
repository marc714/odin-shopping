import { useState, useContext, createContext } from "react";


// https://youtu.be/HptuMAUaNGk?si=aW-X9OSD6HU16g4l&t=958
// https://stackoverflow.com/questions/65284652/is-it-a-correct-approach-to-pass-usestate-setter-to-a-child-for-updating-parents

// custom hooks web dev simplified 

const Cart = createContext();

// export const Provider = ( props => {
export const CartContext = ({ children }) => {
    const [cart, setCart] = useState(1);
    const value = [cart]

    return (
        <Cart.Provider value={value}>
            {/* {props.children} */}
            {children}
        </Cart.Provider>
    )
}


// he's making it confusing with the exports of the two theme/themeupdators. figure out later
// custom hook can hook into the components directly and bypass using MainLayout

// // https://www.developerway.com/posts/how-to-fetch-data-in-react#part7.3

// https://www.developerway.com/posts/how-to-write-performant-react-apps-with-context#part2
// As per React docs, context provides a way to pass data through the component tree without having to pass props down manually at every level.

// const Context = React.createContext();

export default CartContext;
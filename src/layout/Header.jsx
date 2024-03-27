import { Link } from "react-router-dom"
import { ShoppingCart } from "../components/ShoppingCart"


export default function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                logo
                <Link to="/">Home</Link> 
                <Link to="shop">Shop</Link>
            </div>
            <div className="searchbar-container">
                searchbar
            </div>
            <div className="shopping-cart-container">
                shopping cart icon
                <ShoppingCart />
            </div>
        </div>
    )
}
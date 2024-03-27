// https://reactrouter.com/en/main/start/tutorial#active-link-styling
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
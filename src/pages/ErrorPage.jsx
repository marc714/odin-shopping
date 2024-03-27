import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <>
        <p>404 Error</p>
        <Link to="/">Go back home</Link>
        </>
    )
}
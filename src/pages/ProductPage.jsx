import { useParams } from "react-router-dom"

export default function ProductPage() {
    const params = useParams();
    console.log(params)

    return (
        <h1>Product Page</h1>
    )
}
import { Link } from "react-router-dom"

// Build individual card elements for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an “Add To Cart” button.

export default function ProductCards({ products }) {
    return (
        <>
            {/* "I messed up initially. Nothing returned using syntax {} instead of () products.map(product => {}) " */}
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    {product.title}
                    {product.price}
                    {product.category}
                    <img src={product.image} className="temp-size"/>

                    <Link to="/">More Details</Link>
                    <button>Quick Add</button>
                </div>
            ))}
        </>
    )
}

// remember to useParams
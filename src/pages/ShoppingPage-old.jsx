import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Categories } from "../components/Categories";
import ProductCards from "../components/ProductCards";
import useFetch from "../components/useFetch";


// This page loads all the available products from the API
// cosden solutions: fetching data in react

export default function ShoppingPage(){
    // const { loading, error, products } = useFetch()
    
    const initialProducts = useLoaderData();

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();
    const [products, setProducts] = useState(initialProducts)   

    async function switchCategories(url) {
        setLoading(true);
        try {
            const res = await fetch(`https://fakestoreapi.com/${url}`)
            const items = await res.json()
            setProducts(items);
        } catch (e) {
            setError(e)
            console.log(e.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <h1>shopping page</h1>
            <Categories handleSwitch={switchCategories}/>
            {loading && <div>Loading...</div> }
            {error && <div>{ error }</div>}
            <ProductCards products={products} />

            <Link to="/">Go back home</Link>
        </>
    );
}

// you cant put this anywhere, or it's own component. export it and add to: <Route loader={} />
export const productLoader = async () => {
    // await fetch('https://fakestoreapi.com/products?limit=5')
    //   .then(res=>res.json())
    //   .then(json=>console.log(json))
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
    return res.json();
}
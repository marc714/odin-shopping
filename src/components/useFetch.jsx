// netninja custom hooks
// makes more sense to do custom hook then useContext since useContext it parent to sibling forcing us to put the Cart stuff in the MainLayout

import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();
    const [products, setProducts] = useState()
    const [cart, setCart] = useState()

    useEffect( async () => {
        setLoading(true);
        try {
            // const res = await fetch(`https://fakestoreapi.com/${url}`)
            const res = await fetch(url)
            const items = await res.json()
            setProducts(items);
        } catch (e) {
            // setError(e)
            console.log("hello error");
        } finally {
            setLoading(false)
        } 
    }, [])

    return { loading, setLoading, error, setError, products, setProducts, cart, setCart }
}

export default useFetch;
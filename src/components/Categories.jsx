import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

export const Categories = ({ handleSwitch }) => {
    const [categories, setCategories] = useState([])

    let resultObj = null;
    useEffect(()=> {
        const fetchData = async () => {
            const result = await fetch('https://fakestoreapi.com/products/categories')
            resultObj = await result.json();
            setCategories(resultObj)    
        }
        fetchData();
        // setCategories(resultObj)  putting it here after fetchData() doesn't work. 

    }, []);

    // can't do below cause it wont load in time for the html to render. got to use useeffect
    // let categories = null;
    // const fetchData = async () => {
    //     const result = await fetch('https://fakestoreapi.com/products/categories')
    //         // .then(res=>res.json())
    //         // .then(json=>console.log(json))

    //         categories = await result.json();
    //         console.log(categories)
    // }

    // fetchData();
    

    return (
        <div className="categories">
            <button className="category" key={nanoid()} onClick={()=> handleSwitch("products/")}>All</button>
            
            {categories.map(category => (
                <button className="category" key={nanoid()} onClick={()=> handleSwitch("products/category/"+category)}>{category}</button>
            ))}
        </div>
    )

}
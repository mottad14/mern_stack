import axios from "axios";
import React, {useEffect, useState} from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/")
        // .then(response => setProducts(response.data))
        .then(response => setProducts(response.data.products))
        .catch(err=> console.log("Error: ", err))
    },[])
    return (
        <>
            <ProductForm/>
            <ProductList products={products}/>
        </>
    )
}
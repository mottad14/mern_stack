import axios from "axios";
import React, {useEffect, useState} from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

//This is the way that the learn platform demonstrates that we can create Forms to update our 
//Lists and Forms without reloading the page 
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Product from '../components/ProductForm';
// import ProductList from '../components/ProductList';
    
// const Main = (props) => {
//     const [products, setProducts] = useState([]);
//     const [loaded, setLoaded] = useState(false);
    
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/products/')
//             .then(res=>{
//                 setProducts(res.data);
//                 setLoaded(true);
//             })
//             .catch(err => console.error(err));
//     },[]);
    
//     const removeFromDom = productId => {
//         setProducts(products.filter(product => product._id != productId));
//     }
    
//     return (
//         <div>
//            <ProductForm/>
//            <hr/>
//            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
//         </div>
//     );
// }
    
// export default Main;

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
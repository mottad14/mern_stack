// This is the way that the learn platform demonstrates that we can create Forms to update our 
// Lists and Forms without reloading the page 
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../components/ProductForm';
import ProductList from '../components/ProductList';
    
const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    // this function to filter out any Products no longer on our list is passed
    // as a prop to our ProductList component so that when the list displays on this page
    // and we delete something, our State will change (setProducts is used for this) and 
    // thus triggers the page to change and update
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    
    //For recycling component purposes, the following createPerson function is added and called
    // as a component to insert into our form submission as a prop 
    const createProduct = product => {
        axios.post("THE WEBSITE TO cREATE A NEW PRODUCT", product)
    }

    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    );
}
    
export default Main;
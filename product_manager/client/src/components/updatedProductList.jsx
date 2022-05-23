// This way is incorporates the Delete Button and is taken from Platform - produces the List with 

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
    
const ProductList = (props) => {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res => setProducts(res.data));
    }, [])
    
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != product))
    }
    
    return (
        <div>
            {products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/" + product._id}>
                            {product.title}, {product.price}
                            {product.description}
                        </Link>
                        |
                                {/* UPDATE THIS LINK TO BE THE RIGHT UPDATE  */}
                        <Link to={"/api/products/update" + person._id}>
                            Edit
                        </Link> 
                        |
                        {/* The remove fromDom function that we pass in here will remove the Product from the state
                        which will update the page automatically - no more reload needed! */}
                       <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default ProductList;


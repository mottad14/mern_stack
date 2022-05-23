import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";


    
const SingleProduct = (props) => {
    const [product, setProduct] = useState({})
    const { _id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+_id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/api/products/update/${product._id}`}> <button>Update Product</button> </Link>
        </div>
    )
}
    
export default SingleProduct;
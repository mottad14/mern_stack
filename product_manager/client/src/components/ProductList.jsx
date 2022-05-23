import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default(props)=>{
    return (
        <ul>
       {(props.products).map((prod, i) => {
                return (
                <h2 key={i}> <Link to={`/api/products/${prod._id}`}> {prod.title}, {prod.price}</Link> </h2>)
            })} 
        </ul>
    )
}
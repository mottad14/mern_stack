import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//This way is the more effecient way that I completed afterward - taken from Platform
// const ProductList = (props) => {
//     const {removeFromDom} = props;
// }
//     const deleteProduct = (productId) =>{
//         axios.delete("http://localhost:8000/api/products/delete/" + productId )
//         .then(res => {
//             removeFromDom(productId)
//         })
//         .catch(err => console.error(err))
//     }

//     return(
//         <div>
//             {props.products.map((product, idx)=> {
//                 return <div key={idx}>
//                     <Link to={"/api/products/"+product._id}>
//                         {product.title} - {product.price}
//                     </Link>
//                     |
//                     <button onClick={(e)=> (deleteProduct(product._id))}>
//                         Delete
//                     </button>
//                 </div>
//             })}
//         </div>
//     )
// export default ProductList;

export default(props)=>{
    return (
        <ul>
       {(props.products).map((prod, i) => {
                return (
                <h2 key={i}> {prod.title}, {prod.price} 
                <Link to={`/api/products/${prod._id}`}><button> View Details</button></Link>
                <button onClick={(e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/products/delete/"+prod._id)
            .then(res => {console.log(res);
                //the following line is vanilla JS used to reload the page.
                //Another idea that I just got to refresh the page is to create a useState variable
                //that keeps adding everytime that a new product is added to the list (not certain how to best do this)
                //But whenever state changes, the page reloads.
                window.location.reload(false);})
            .catch(err => console.error(err))}}> Delete </button>
                </h2>)
            })} 
        </ul>
    )
}
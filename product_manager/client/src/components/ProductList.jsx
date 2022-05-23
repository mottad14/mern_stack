import React from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

export default(props)=>{
    const history = useHistory();
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
                console.log("We're about to push history here.")
                //the following line is vanilla JS used to reload the page.
                window.location.reload(false);})
            .catch(err => console.error(err))}}> Delete </button>
                </h2>)
            })} 
        </ul>
    )
}
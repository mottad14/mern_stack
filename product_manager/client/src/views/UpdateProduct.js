import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const UpdateProduct = (props) => {
    const { _id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ _id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);
    
    const update_product = (e) => {
        axios.put("http://localhost:8000/api/products/update/"+_id,{
            title,
            price,
            description
        })
            .then(res =>{ console.log(res);
                //the following line is vanilla Java that reloads the page.
                window.location.reload(false);})
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={update_product}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <textarea 
                    name="description" 
                    value={description} 
                    onChange={(e) => {setDescription(e.target.value) }}> </textarea>
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default UpdateProduct;


import React, {useState} from "react";
import axios from "axios";

export default () =>{
    const [title, setTitle]= useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHander = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/products/new", {
        title,
        price, 
        description
    })
    .then(response=>{
        console.log("Response: ", response);
        //the following line causes the page to reload.
            window.location.reload(false);})
    .catch(error => console.log("Error: ", error))
}

    return(
        <form onSubmit={onSubmitHander}>
            <div>
                <label> Title</label>
                <input type="text" value={title} onChange={(event)=> setTitle(event.target.value)} />
            </div>
            <div>
                <label> Price</label>
                <input type="number" value={price} onChange={(event)=> setPrice(event.target.value)} />
            </div>
            <div>
                <label> Description </label>
                <input type="text" value={description} onChange={event=> setDescription(event.target.value)} />
            </div>
            <input type="submit"/>
        </form>
    )
}
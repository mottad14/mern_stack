import React, { useState } from 'react';
import axios from 'axios';

// This is updated to include a State that stores an array of possible errors that
// may be given when attempting to post/create a new Object/Document (in this case a new book)
// with validations - the errors are likely to be from Validations
export default function Main() {
    const [title, setTitle] = useState("");
    const [pages, setPages] = useState(0);
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 
    const onSubmitHandler = e => {
        e.preventDefault();
        //Send a post request to our API to create a Book
        axios.post('http://localhost:8000/books', {
            title,
            pages
        })
            .then(res=>console.log(res)) // If successful, do something with the response. 
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Pages</label>
                    <input type="text" onChange={e => setPages(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}


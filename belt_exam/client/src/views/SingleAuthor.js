import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";


    
const SingleAuthor = (props) => {
    const [author, setAuthor] = useState({})
    const { _id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+_id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Author Name: {author.name}</p>
            <Link to={`/api/authors/update/${author._id}`}> <button>Update Author</button> </Link>
        </div>
    )
}
    
export default SingleAuthor;
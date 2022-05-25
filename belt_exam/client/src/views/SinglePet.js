import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory} from "react-router-dom";
import {Link} from "react-router-dom";


    
const SinglePet = (props) => {
    const [pet, setPet] = useState({})
    const { _id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+_id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, []);
    // Create a button that uses Axios delete command on this page - and reroutes us back to the main page and 
    // 
    const onDeleteHandler = () =>{
        if(window.confirm(`Are you sure you want to adopt ${pet.name} the ${pet.type}? This action will remove this pet from our database.`));
        axios.delete("http://localhost:8000/api/pets/adopt/"+_id)
        .then(res=>{
            history.push("/api/pets/")
        })
        .catch(err=>console.log(err))
    }
    
    return (
        <div>
            <h1>Pet Shelter       |   <Link to={"/api/pets/"}>  back to home </Link></h1>
            <h2> Details about: {pet.name}   | <button onClick={onDeleteHandler}>Adopt</button> </h2>
            <br />
            <br />
            <h3> Pet type: {pet.type}</h3>
            <h3>Description: {pet.description}</h3>
            <h3>Skills: {pet.skill1} <p>{pet.skill2}</p> <p>{pet.skill3}</p> </h3>

            
            <Link to={`/api/pets/update/${pet._id}`}> <button>Update Pet</button> </Link>
        </div>
    )
}
    
export default SinglePet;
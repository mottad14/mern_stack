// This is the way that the learn platform demonstrates that we can create Forms to update our 
// Lists and Forms without reloading the page 
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetList from '../components/PetList';
import {Link} from "react-router-dom";

    
export default () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                console.log(res.data.pets)
                setPets(res.data.pets);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    // this function to filter out any Products no longer on our list is passed
    // as a prop to our AuthorList component so that when the list displays on this page
    // and we delete something, our State will change (setProducts is used for this) and 
    // thus triggers the page to change and update
    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id != petId));
    }

    return (
        <div>
            <h1>Pet Shelter       |   <Link to={"/api/pets/create"}> add a pet to the shelter </Link></h1>
           <hr/>
           {loaded && <PetList pets={pets} removeFromDom={removeFromDom}/>}
        </div>
    );
}
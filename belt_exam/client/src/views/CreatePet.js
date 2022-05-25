import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import PetForm from "../components/PetForm"
// import AdoptButton from '../components/AdoptButton';
    
const CreatePet = (props) => {

    const history = useHistory();

    const [errors, setErrors] = useState({})


    const create_pet = pet => {
        axios.post("http://localhost:8000/api/pets/new", pet)
            .then(res =>{ console.log(res);
                history.push("/api/pets/");
                })
                //ORIGINALLY - I reloaded the page, but because our update will now 
                // recycle the Production Creation Form - we no longer need to create a form
                // instead, we can load in the original creation form -- and pass in the 
                // updatePerson function logic as our onSubmitProp prop. 

                //the following line is vanilla JavaScript that reloads the page.
                // window.location.reload(false);})
            .catch(err =>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }
    
    return (
        <div>
            <h1>Pet Shelter       |   <Link to={"/api/pets/"}>  back to home </Link></h1>
            <h2>Know a pet needing a home?</h2>


            {
            <>
            <PetForm nameError={errors.name ? errors.name.message: ""} typeError={errors.type ? errors.type.message: ""} descriptionError={errors.description ? errors.description.message: ""} onSubmitProp={create_pet} initialName="" initialType="" initialDescription="" initialSkill1="" initialSkill2="" initialSkill3=""/>
            </>
            }
        </div>
    )
}
    
export default CreatePet;
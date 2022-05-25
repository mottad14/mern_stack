import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import PetForm from "../components/PetForm"
// import AdoptButton from '../components/AdoptButton';
    
const UpdatePet = (props) => {

    const history = useHistory();
    const {_id} = useParams();    
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [errors, setErrors] = useState({})

    
    // This loads the specific product's info using the passed in useParams ID
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/'+ _id)
            .then(res => {
                console.log(res.data);
                setPet(res.data);
                setLoaded(true);
            })
    }, []);
    

    const update_pet = pet => {
        axios.patch("http://localhost:8000/api/pets/update/"+_id, pet)
            .then(res =>{ console.log(res);
                history.push("/api/pets/");
                })
            
                //ORIGINALLY - I reloaded the page, but because our update will now 
                // recycle the Production Creation Form - we no longer need to create a form
                // instead, we can load in the original creation form -- and pass in the 
                // updatePerson function logic as our onSubmitProp prop. 

                //the following line is vanilla JavaScript that reloads the page.
                // window.location.reload(false);})
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }
    
    return (
        <div>
            <h1>Pet Shelter       |   <Link to={"/api/pets/"}>  back to home </Link></h1>
            <h2>Edit {pet.name}</h2>
            {/* We wait for the page to load before - finally displaying the Form to update.
            OnSubmitProp is passing in our update_product function */}

            {loaded && ( 
            <>
            <PetForm nameError={errors.name ? errors.name.message: ""} typeError={errors.type ? errors.type.message: ""} descriptionError={errors.description ? errors.description.message: ""}  onSubmitProp={update_pet} initialName={pet.name} initialType={pet.type} initialDescription={pet.description} initialSkill1={pet.initialSkill1} initialSkill2={pet.initialSkill2} initialSkill3={pet.initialSkill3}/>
            </>
            )}
        </div>
    )
}
    
export default UpdatePet;


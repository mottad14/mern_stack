import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import AuthorForm from "../components/AuthorForm"
import DeleteButton from '../components/DeleteButton';
    
const UpdateAuthor = (props) => {

    const history = useHistory();
    const {_id} = useParams();    
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    
    // This loads the specific product's info using the passed in useParams ID
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/'+ _id)
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
                setLoaded(true);
            })
    }, []);
    

    const update_author = author => {
        axios.put("http://localhost:8000/api/authors/update/"+_id, author)
            .then(res =>{ console.log(res);
                history.push("/api/authors/");
                })
            
                //ORIGINALLY - I reloaded the page, but because our update will now 
                // recycle the Production Creation Form - we no longer need to create a form
                // instead, we can load in the original creation form -- and pass in the 
                // updatePerson function logic as our onSubmitProp prop. 

                //the following line is vanilla JavaScript that reloads the page.
                // window.location.reload(false);})
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update Author</h1>
            
            {/* We wait for the page to load before - finally displaying the Form to update.
            OnSubmitProp is passing in our update_product function */}

            {loaded && ( 
            <>
            <AuthorForm onSubmitProp={update_author} initialName={author.name}/>
            <DeleteButton authorId={author._id} successCallback={()=> history.push("/api/authors/")} />
            </>
            )}
        </div>
    )
}
    
export default UpdateAuthor;


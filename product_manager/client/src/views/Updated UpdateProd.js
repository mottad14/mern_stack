import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import ProductForm from "../components/ProductForm"
import DeleteButton from '../components/DeleteButton';
    
const Updated_UpdateProduct = (props) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    const history = useHistory();
    const {_id} = useParams;
    
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    
    // This loads the specific product's info using the passed in useParams ID
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+ _id)
            .then(res => {
                setProduct(res.data)
                setLoaded(true);
            })
    }, []);
    

    const update_product = product => {
        axios.put("http://localhost:8000/api/products/update/"+_id, product)
            .then(res => console.log(res))
                //ORIGINALLY - I reloaded the page, but because our update will now 
                // recycle the Production Creation Form - we no longer need to create a form
                // instead, we can load in the original creation form -- and pass in the 
                // updatePerson function logic as our onSubmitProp prop. 

                //the following line is vanilla Java that reloads the page.
                // window.location.reload(false);})
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            
            {/* We wait for the page to load before - finally displaying the Form to update.
            OnSubmitProp is passing in our update_product function */}

            {loaded && ( 
            <>
            <PersonForm
                    onSubmitProp={update_product}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description} />
            <DeleteButton personId={person._id} successCallback={()=> history.push("/")} />
            </>
            )}
        </div>
    )
}
    
export default UpdateProduct;


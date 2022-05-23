import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { productId, successCallback } = props;
    
    const deleteProduct = event => {
        axios.delete('DELETE URL' + personId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}


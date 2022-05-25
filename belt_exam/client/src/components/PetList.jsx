// This way is incorporates the Delete Button and is taken from Platform - produces the List with 
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
    
const PetList = (props) => {
    const {pets} = props;
    
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {pets.map((pet, idx) =>{
                    return(
                    <tr key={idx}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td><Link to={"/api/pets/single/" + pet._id}> details </Link> | <Link to={"/api/pets/update/" + pet._id}> edit </Link> </td>
                    </tr>)
                })}
                </tbody>
            </table>
            
        </div>
    );
}
    
export default PetList;

//Includes the delete button for reference
// {authors.map((author, idx) => {
//                 return (
//                     <p key={idx}>
//                         <Link to={"/api/authors/" + author._id}>
//                             {author.name}
//                         </Link>
//                         |
//                                 {/* UPDATE THIS LINK TO BE THE RIGHT UPDATE  */}
//                         <Link to={"/api/authors/update/" + author._id}>
//                             Edit
//                         </Link> 
//                         |
//                         {/* The remove fromDom function that we pass in here will remove the author from the state
//                         which will update the page automatically - no more reload needed! */}
//                        <AdoptButton petName={pet.name} petId={author._id} successCallback={()=>removeFromDom(author._id)}/>
//                     </p>
//                 )
//             })}
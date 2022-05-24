// This way is incorporates the Delete Button and is taken from Platform - produces the List with 
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
    
const AuthorList = (props) => {
    const {authors, removeFromDom} = props;
    
    return (
        <div>
            {authors.map((author, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/api/authors/" + author._id}>
                            {author.name}
                        </Link>
                        |
                                {/* UPDATE THIS LINK TO BE THE RIGHT UPDATE  */}
                        <Link to={"/api/authors/update/" + author._id}>
                            Edit
                        </Link> 
                        |
                        {/* The remove fromDom function that we pass in here will remove the author from the state
                        which will update the page automatically - no more reload needed! */}
                       <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default AuthorList;

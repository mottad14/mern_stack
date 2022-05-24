// This is the way that the learn platform demonstrates that we can create Forms to update our 
// Lists and Forms without reloading the page 
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
    
export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/')
            .then(res=>{
                setAuthors(res.data.authors);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    // this function to filter out any Products no longer on our list is passed
    // as a prop to our AuthorList component so that when the list displays on this page
    // and we delete something, our State will change (setProducts is used for this) and 
    // thus triggers the page to change and update
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
    
    //For recycling component purposes, the following createAuthor function is added and called
    // as a component to insert into our form submission as a prop 
    const createAuthor = author => {
        axios.post("http://localhost:8000/api/authors/new", author)
        .then(res=>{
            console.log(res.data)
            setAuthors([...authors, res.data])
        })
    }

    return (
        <div>
           <AuthorForm onSubmitProp={createAuthor} initialName=""/>
           <hr/>
           {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    );
}
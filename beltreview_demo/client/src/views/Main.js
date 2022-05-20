import React, {useState, useEffect} from "react";
import axios from "axios";
import RecipePreview from "../components/RecipePreview";

const Main = (props) => {
    const [recipes, setRecipes]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/recipes/all")
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }, [])

    return(
        <div className="d-flex justify-content-around flex-wrap w-75 mx-auto">
            main page here
            
                {
                    recipes.map((item,i)=>{
                        return RecipePreview
                    })
                }
            
        </div>
    )
}

export default App;
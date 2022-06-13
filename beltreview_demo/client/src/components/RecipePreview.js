import React from "react";

const RecipePreview = (props) => {
    const {data} = props;

    return(
        <div className="recipePreview" >
            <img src={data.imgURL} alt={data.name} />
                <div>
                    <h3>{data.name}</h3>
                    <p> <em> Serves {data.servings} </em> ⏲ <em>{data.minutes}</em>  </p> 
                </div>

        </div>
    )
}

export default RecipePreview
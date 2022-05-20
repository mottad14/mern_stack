import React from "react";

const RecipePreview = (props) => {
    const {data} = props;

    return(
        <div className="recipePreview">
            preview here {data.name}
            <img src={data.imgURL} alt={data.name} />
            <h3>{data.name}</h3>
            <p> <em> serves {data.servings} </em> ⏲ <em>{data.minutes}</em>  </p>
        </div>
    )
}

export default RecipePreview
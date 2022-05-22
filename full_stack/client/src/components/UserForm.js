import React, {useState} from "react";
import axios from 'axios';

export default props =>{
    const [firstName, setfirstName]= useState("");
    const [lastName, setLastName] = useState("")

    const onSubmitHander = (event) => {
    event.preventDefault();
    axios.post("http:localhost:8000/api/user/create", {
        firstName,
        lastName
    })
    .then(response=>console.log("Response: ", response))
    .catch(error => console.log("Error: ", error))
}

    return(
        <form onSubmit={onSubmitHander}>
            <div>
                <label> First Name</label>
                <input type="text" onChange={e=> setfirstName(e.target.value)} />
            </div>
            <div>
                <label> Last Name</label>
                <input type="text" onChange={e=> setLastName(e.target.value)} />
            </div>
            <input type="submit" value="Create" />
        </form>
    )
}
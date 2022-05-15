import React, {useEffect, useState} from "react";
import axios from "axios";


const PokeCard=(props) => {
    const [pokeData, setPokeData] = useState();

    //We're moving the fetchInfo function into our useEffect method
    // const fetchInfo=()=>{

    //     console.log("get info")
    //     axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
    //     .then(res=>{
    //         //This sets our downloaded API Data
    //         setPokeData(res.data);
    //     })
    //     .catch(err=>console.log())
    // }
    //useEffect will call both a function and an array in its parameters -- lifecycle methods -> component Didmount -> component did ->componentDidUnmount
    //useEffect uses all lifecycle Methods - we're using it to immediately call on the Pokemon sprite to load when page opens
    //useEffect runs for component mounts; run return when unmount; dependency array changes 
    //whenever props name changes, it runs the function in useEffect - as well as when it mounts
    useEffect (()=>{
        console.log("get info")
        axios.get("https://pokeapi.co/api/v2/pokemon/" + props.name)
        .then(res=>{
            //This sets our downloaded API Data
            setPokeData(res.data);
        })
        .catch(err=>console.log(err))
    }   
    }, [props.name] )

    return(
        <div>
            <img src={pokeData ? pokeData.sprites.front_default : ""} alt="{props.name}" />
            component here: {props.name}
            <button className="btn" onClick={fetchInfo}>get info</button>
        </div>
    )
    }

export default PokeCard;
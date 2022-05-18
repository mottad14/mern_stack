import react, { useEffect, useState } from 'react';
import axios from "axios";
    
const SWPlanet = (props) => {
    const [planetData, setPlanetData] = useState();

    useEffect(()=> {
        console.log("use effect is running for the Star Wars character:"+ props.Id);
        axios.get("https://swapi.dev/api/planets/"+ props.PlanetId)
        .then(response=>{
        console.log(response.data)
        setPlanetData(response.data)})      
        .catch(err=> console.log("These aren't the droids you're looking for", err))
    }, [])

    return (
        <>
            <h1>Current Planet's name</h1>
            <h1>{planetData ? planetData.name :""}</h1>
            <p>Climate: {planetData ? planetData.climate : ""}</p>
            <p>Terrain: {planetData ? planetData.terrain : ""}</p>
            <p>Surface Water: {planetData ? planetData.surface_water : ""}</p>
            <p>Population: {planetData ? planetData.population : ""}</p>
        </>
    );
};
    
export default SWPlanet;



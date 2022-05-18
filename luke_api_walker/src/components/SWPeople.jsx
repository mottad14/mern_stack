import react, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router";
    
const SWPeople = (props) => {
    const [peopleData, setPeopleData] = useState({});
    const {Id} = useParams();

    useEffect(()=> {
        console.log("use effect is running for the Star Wars character:"+Id);
        axios.get("https://swapi.dev/api/people/"+Id)
        .then(response=>{
        console.log(response.data)
        setPeopleData(response.data)})      
        .catch(err=> console.log("These aren't the droids you're looking for.", err))
    }, [Id])

    return (
        <>
            <h1>Current Person's name</h1>
            <h1>{peopleData ? peopleData.name : ""}</h1>
            <p>Height: {peopleData ? peopleData.height : ""}</p>
            <p>Mass: {peopleData ? peopleData.mass : ""}</p>
            <p>Hair Color: {peopleData ? peopleData.hair_color : ""}</p>
            <p>Skin Color: {peopleData ? peopleData.skin_color : ""}</p>
        </>
    );
};
    
export default SWPeople;

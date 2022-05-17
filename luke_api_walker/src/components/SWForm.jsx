import React, {useState} from "react";
import { useParams } from "react-router";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import axios from 'axios';

function SWForm() {
  const [SWData, setSWData] = useState([]);  
  const getSWData = ()=>{
    axios.get('https://swapi.dev/api/starships/5').then(response=>{
      console.log(response.data)
      setSWData(response.data)})
  }

  //We can use the fetch method as shown below or use Axios as shown above
  // const getPokemon = ()=>{
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  //   .then(data => data.json())
  //   .then(response=> 
  //     {
  //       console.log(response);
  //       setPokemon(response.results);
  //     })
  //   .catch(error=>console.log(error))
  // }

  return (
    <div className="App">
        <button onClick={getSWData} className='btn btn-info btn-lg d-block mx-auto my-2'>Search!</button>
      <ul>
      {
        SWData.name
      //   SWData.map((swdatum, index)=>{
      //   return (<li key={index}> {swdatum.name} </li>)
      // })
      }
      </ul>
    </div>
  );
}

export default SWForm;

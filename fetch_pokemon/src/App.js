import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = ()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(data => data.json())
    .then(response=> 
      {
        console.log(response);
        setPokemon(response.results);
      })
    .catch(error=>console.log(error))
  }

  return (
    <div className="App">
        <button onClick={getPokemon} className='btn btn-info btn-lg d-block mx-auto my-2'>Get Pokemon!</button>
      <ul>
      {
      pokemon.map((pokemon, index)=>{
        return (<li key={index}> {pokemon.name} </li>)
      })
      }
      </ul>
    </div>
  );
}

export default App;

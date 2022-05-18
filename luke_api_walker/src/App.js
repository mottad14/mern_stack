import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import react, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import SWPeople from './components/SWPeople';
import SWPlanet from './components/SWPlanet';

function App() {
  const [currentId, setCurrentId] = useState("")
  const [criteria, setCriteria] = useState("")
  const history = useHistory();

  const createRequest= (event) =>{
      event.preventDefault();
      if(criteria === "planets"){
        history.push("/planets")
      }
      else if (criteria === "people") {
        history.push("/people")
      }
    };
  return (
    <div className="App">
      {/* Insert a form and submit components that allows for users to select their search options (people, planets, or starships) */}
      <div className="form">
      <form onSubmit={createRequest}>
        <label >Search for this Criteria:</label>
        <select className="form mx-3" value={criteria} onChange={(event)=>setCriteria(event.target.value)}>
          <option selected="true" disabled="disabled">Choose Criteria</option>              
          <option value="people">people</option>
          <option value="planets">planets</option>
        </select>
        <label>ID:</label>
        <input className="form mx-2" type="text" value={currentId} onChange={(event)=>setCurrentId(event.target.value)} />
        <input className="btn btn-primary" type="submit" value="Search"/>
      </form>
      </div>
      <Switch>
        <Route path="/people">
          <SWPeople PeopleId={currentId}/>
        </Route>
        <Route exact path="/planets">
          <SWPlanet PlanetId={currentId}/>
        </Route>
      </Switch>
      



      {/* When the form's value for Criteria Changes - Shift the routing over to the appropriate page
      So that the appropriate data is filtered out by the incoming data stream */}
      
    </div>
  );
}

export default App;

// Below - useHistory to route to a new results page after survey has been submitted

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
    
// const Survey = (props) => {
//   const [name, setName] = useState("");
//   const [comment, setComment] = useState("");
//   const history = useHistory();
    
//   const sendSurvey = (e) => {
//     e.preventDefault();
//     // do something with the data
//     history.push("/results");
//   }
    
//   return (
//     <form onSubmit={ sendSurvey }>
//       <label>Your Name:</label>
//       <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
//       <label>Your Comment:</label>
//       <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
//       <input type="submit" value="Submit Survey" />
//     </form>
//   );
// }

import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import './App.css';
import Main from './views/Main';
import UpdatePet from "./views/UpdatePet";
import SinglePet from "./views/SinglePet";
import CreatePet from "./views/CreatePet"

function App() {
  return (
    <div className="App">
      <Route exact path="/api/pets/">
        <Main/>
      </Route>

      <Route exact path="/api/pets/single/:_id/">
        <SinglePet/>
      </Route>

      <Route exact path="/api/pets/create">
        <CreatePet/>
      </Route>

      <Route exact path="/api/pets/update/:_id">
        <UpdatePet/>
      </Route>

      <Route exact path="/api/pets/delete/:_id">
      </Route>
    </div>
  );
}

export default App;


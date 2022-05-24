import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import './App.css';
import Main from './views/Main';
import SingleAuthor from "./views/SingleAuthor";
import UpdateAuthor from "./views/UpdateAuthor";

function App() {
  return (
    <div className="App">
      <Route exact path="/api/authors/">
        <Main/>
      </Route>

      <Route exact path="/api/authors/:_id">
        <SingleAuthor/>
      </Route>

      <Route exact path="/api/authors/update/:_id">
        <UpdateAuthor/>
      </Route>

      <Route exact path="/api/authors/delete/:_id">
      </Route>
    </div>
  );
}

export default App;


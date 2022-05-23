import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import './App.css';
import Main from './views/Main';
import SingleProduct from "./views/SingleProduct";

function App() {
  return (
    <div className="App">
      {/* <Main></Main> */}

      <Route exact path="/api/products/">
        <Main/>
      </Route>

      <Route exact path="/api/products/:_id">
        <SingleProduct/>
      </Route>
    </div>
  );
}

export default App;

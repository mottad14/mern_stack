import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import './App.css';
import Main from './views/Main';
import SingleProduct from "./views/SingleProduct";
import UpdateProduct from "./views/UpdateProduct";

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

      <Route exact path="/api/products/update/:_id">
        <UpdateProduct/>
      </Route>

      <Route exact path="/api/products/delete/:_id">
      </Route>
    </div>
  );
}

export default App;

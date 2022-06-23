import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom";
import './App.scss';
import NavBar from './components/NavBar';
import Main from './views/Main';
import Create from './views/Create';
import Recipe from './views/Recipe';

function App() {
  return (
    
    <div className="App">
      <div className="">
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>

            <Route path="/view/single/:_id">
              <Recipe/>
            </Route>

            <Route exact path="/create">
              <Create/>
            </Route>

          </Switch>
          <div className="cube"/>
          <div className="cube"/>
          <div className="cube"/>
          <div className="cube"/>
          <div className="cube"/>
       </div>
    </div>
  );
}

export default App;

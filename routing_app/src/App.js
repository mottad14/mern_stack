import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

const Home = (props) =>{
    return (
      <h1 style={{color: "red"}}> Home Component </h1>
    )
  }

const About = (props) =>{
  return(
    <h1 style={{color: "blue"}}> About Component </h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>
         | 
        <Link to="/about">About</Link>   
      </p>

      The Switch and Route lines below will help us move between the 2 routes (About and Home page), seamlessly. 
      <Switch>
        <Route path="/about">  <About/>  </Route>
        
        <Route exact path="/">  <Home/>  </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;

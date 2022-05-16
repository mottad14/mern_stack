import logo from './logo.svg';
import './App.css';
import { useParams } from "react-router";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

// Example of Routing to Home and About Page:

// const Home = (props) =>{
//     return (
//       <h1 style={{color: "red"}}> Home Component </h1>
//     )
//   }

// const About = (props) =>{
//   return(
//     <h1 style={{color: "blue"}}> About Component </h1>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <h1>Routing Example</h1>
//       <p>
//         <Link to="/">Home</Link>
//          | 
//         <Link to="/about">About</Link>   
//       </p>

//       The Switch and Route lines below will help us move between the 2 routes (About and Home page), seamlessly. 
//       <Switch>
//         <Route path="/about">  <About/>  </Route>
        
//         <Route exact path="/">  <Home/>  </Route>

//       </Switch>

//     </BrowserRouter>
//   );
// }


// Example of Routing with useParams to use Variables - :city - indicate where our routing prop/variable is
const Location = (props) => {

  const { city } = useParams();
  return (
    <h1> City Component loaded - Welcome to {city}'s page! </h1>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        &nbsp;|&nbsp;
        <Link to="/location/chicago">Chicago</Link>
        &nbsp;|&nbsp;
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Switch>
        <Route path="/location/:city">
          <Location />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    

export default App;

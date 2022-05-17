import './App.css';
import { useParams } from "react-router";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

// Example of Routing to Home and About Page:

const Home = (props) =>{
    return (
      <h1 style={{color: "red"}}> Welcome to the Home Component </h1>
    )
  }

const Hello = (props) =>{
  return(
    <h1 style={{color: "blue"}}> Hello! </h1>
  )
}

const Number = (props) => {

  const { number } = useParams();
  if(!isNaN(number)){
    return (
    <h1> Number Component loaded - Welcome to {number}'s page! - This is a number!! </h1>
  ); 
  }
  // The following will only load if number-deconstructor is not a number! 
  return (
    <h1> Number Component loaded - {number} is not a number </h1>
  );
}

const TextBackground = (props) =>{
  const {text} = useParams();
  const {background} = useParams();
  console.log("THIS IS FROM WITHIN TEXTBACKGROUND")
  return(
    <h1 style={{ color: text, backgroundColor: background }}> Hello this is the Color Page! </h1>
  )
}

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/home">Home</Link>
         | 
        <Link to="/hello">Hello</Link>   
      </p>

      {/* The Switch and Route lines below will help us move between the routes seamlessly.  */}
      <Switch>
        <Route path="/home">  <Home/>  </Route>
        
        <Route exact path="/hello">  <Hello/>  </Route>

        <Route exact path="/hello/:text/:background"> <TextBackground /> </Route>

        <Route path="/:number"> <Number /> </Route>


      </Switch>

    </BrowserRouter>
  );
}


// Example of Routing with useParams to use Variables - :city - indicate where our routing prop/variable is
// const Location = (props) => {

//   const { city } = useParams();
//   return (
//     <h1> City Component loaded - Welcome to {city}'s page! </h1>
//   );
// }
    
// function App() {
//   return (
//     <BrowserRouter>
//       <p>
//         <Link to="/location/seattle">Seattle</Link>
//         &nbsp;|&nbsp;
//         <Link to="/location/chicago">Chicago</Link>
//         &nbsp;|&nbsp;
//         <Link to="/location/burbank">Burbank</Link>
//       </p>
//       <Switch>
//         <Route path="/location/:city">
//           <Location />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
    

export default App;

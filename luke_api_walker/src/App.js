import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SWForm from './components/SWForm';

function App() {
  return (
    <div className="App">

      {/* Insert a form and submit components that allows for users to select their search options (people, planets, or starships) */}
      <SWForm/>
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

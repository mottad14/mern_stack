import './App.css';
import React, {useState} from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleNewToDoSubmit= (event)=>{
    event.preventDefault();
    if (newTodo.length ===0){
      return(alert("Your new To-do must have at least 1 character."))
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setToDos([...toDos, todoItem])
    setNewTodo("")
  }

  const handleToDoDelete=(delId) =>{
    const filteredTodos = toDos.filter((todo, i) =>{
      return i != delId;
    })
    setToDos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = toDos.map((todo,i) =>{
      if (idx === i){
        todo.complete = !todo.complete;
        
        // To avoid mutating the todo directly, do this: 
        // const updatedTodos = {...todo, complete: !todo.complete};
        // return updatedTodos;
      }
      return todo;
    })
    setToDos(updatedTodos);
  }
  

  return (
    <div className="App">
      <form onSubmit={(event)=> {handleNewToDoSubmit(event)}}>
        <input value={newTodo} type="text" onChange={(event)=>{
          setNewTodo(event.target.value)
        }} />
        <div> 
          <button> Add </button>  
        </div>
      </form>

      {
        toDos.map((todo, i) => {
          // Here we implement the strikethrough and styling
          const toDoClasses = ["bold", "italic"]

          if (todo.complete){
            toDoClasses.push("line-through")
          }

          return (
            <div key={i}>
              <input onChange={(event)=>{handleToggleComplete(i);
              }} checked={todo.complete} type="checkbox" />
              <span className={toDoClasses.join(" ")}>{todo.text}</span>
              <button onClick={(event)=>{
                handleToDoDelete(i)
              }}> Delete </button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

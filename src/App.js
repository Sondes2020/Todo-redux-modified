import React,{useState} from "react"
import AddTodo from "./Components/AddToDo";
import Todolist from "./Components/TodoLiist";
import "./App.css"; 
import Filter from "./Components/Filter";
const App=()=>{

 
  return (
    <div className="App">
     <h1> TO-DO-Redux</h1>
      <AddTodo />
     
      <Todolist />
    <Filter/>
      
    </div>
  )
  }
export default App; 



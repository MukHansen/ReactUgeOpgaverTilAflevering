import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
import uuid from "uuid/v1";

function App() {
  const initialData = [
    { id: uuid(), todoText: "Wake up" },
    { id: uuid(), todoText: "Make Coffee" },
    { id: uuid(), todoText: "Drink Coffee" }
  ]
  const [todos, setTodos] = useState(initialData);
  const [newTodo, setNewTodo] = useState({ id: "", todoText: "" });
  console.log(todos)

  const addTodo = todo => {
    if (todo.id === "") { // id=-1 Indicates a new object
      todo.id = uuid();
      todos.push(todo);
    } else {//if id != "", it's an existing todo. Find it and add changes
      let todoToEdit = todos.find(t => t.id === todo.id);
      todoToEdit.todoText = todo.todoText;
    }
    setTodos([...todos]);
    setNewTodo({id:"", todoText:""})
  };

  const deleteTodo = (index) => {
    //const refTodos = todos.splice(index);
    const refTodos2 = todos.filter( t => t.index);
    setTodos([...refTodos2]);
  }
  const editTodo = (index) => {
    console.log("edit---------------->")
     setNewTodo(todos.find(todo => todo.id === index));
  }

  
  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <TodoList 
          todos={todos} 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          />
        </div>
        <div className="col-5 new-todo">
          <NewTodo
            addTodo={addTodo}
            nextTodo={newTodo}            
          />
        </div>
      </div>
    </div>
  );
}
export default App;
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'


//function App() 
function TodoList() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState(['Ready', 'Set', 'GO']);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodoList((prevTodoList) => [...prevTodoList, inputText]);
    setInputText('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoListInput">Input the next task</label>
        <input type="text" placeholder="Add new item" name= "todoListInput" id="todoListInput" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {/* map over the todoList state to render list items */}
        {todoList.map((element, index) => (<li key={index}>{element}</li>))}
      </ul>
    </div>
  );
}
  

export default TodoList



import './App.css';
import InputArea from './components/InputArea';
import { useState } from 'react';
import ToDoItem from './components/ToDoItem';

function App() {
  const[items,setItems]=useState([]);

  const addItems=(inputText)=>{
    setItems((prevItems)=>{
      return[...prevItems,inputText]
    })

  };
  const deleteItem=(id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((items,index)=>{
        return index !==id;
      });
    });
  };
  
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-do list</h1>
      </div>
      <InputArea additems={addItems}/>
      <div>
      <ul>
       {items.map((items,index) => {
         return <ToDoItem key={index} text={items} deleteItem={deleteItem} id={index} />;
       })}
      </ul>
      </div>
    </div>
  
  );
}

export default App;

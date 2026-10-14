import React, { useState } from "react";
import "./App.css";

import ToDoList from "./components/ToDoList";

function App() {
  const [items, setItems] = useState([
    { id: 1, value: "Task 1" },
    { id: 2, value: "Task 2" },
    { id: 3, value: "Task 3" },
  ]);

  function handelDelete(id) {
    setItems((prevValue) => prevValue.filter((item) => item.id !== id ))
  }

  return (
    <div className="App-header">
      <ToDoList items={items} onRemove={handelDelete}/>
    </div>
  );
}

export default App;

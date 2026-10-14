import React, { useEffect } from "react";

const ToDoList = ({ items, onRemove }) => {
  useEffect(() => {
    console.log("Эффект запущен. Количество задач:", items.length); //срабатывает каждый раз когда что то меняется в items

    return() => console.log('cleanup effect') //срабатывает перед useEffect
  }, [items]);
  return (
    <ul>
      {items.map((i) => (
        <li key={i.id}>
          {i.value}
          <button onClick={() => onRemove(i.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;

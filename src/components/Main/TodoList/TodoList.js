import React from 'react';
import { useState } from 'react';

const TodoList = () => {
  
  const [items,setItems] = useState(
    [
      {
        id:1,
        checked:true,
        item:"HTML"
      },
      {
        id:2,
        checked:true,
        item:"CSS"
      },
      {
        id:3,
        checked:true,
        item:"javascript"
      }
    ]
    );
  
  return (
    <section>
      <h2>Todo List</h2>
      <div className ="list-container">
        <ul>
          {items.map((item) => (
            <li>
              <input type="checkbox"
              checked={item.checked}
              ></input>
              <label>{item.item}</label>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
    
  )
  
}

export default TodoList;
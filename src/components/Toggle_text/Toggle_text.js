import React from 'react';
import { useState } from 'react';
import './ToggleText.css';

const Toggle_text = () => {
  const [text,setText] = useState("Selva");
  
  const handleText = () => {
    setText((prevText) => {
      const result = prevText === "Selva" ? "Arun":"Selva";
      return result;
    })
  }
  return (
   <section>
     <h2>Toggle Text</h2>
     <div className ="text-container">
       <p>{text}</p>
       <button onClick = {handleText}>Toggle Text</button>
     </div>
   </section>
    
  );
}
export default Toggle_text;
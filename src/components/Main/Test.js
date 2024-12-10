import React from 'react';
import { useState } from 'react';

const NameChange = () => {
  
  const [name, setName] = useState("Selva");
  
  const handleChange =() => {
    const nameArray = ["Selva","Arun","Ajith"];
    const init = Math.floor(Math.random()*3);
    setName(nameArray[init]);
  }
  
  return (
    <section>
      <h2>Name change</h2>
      <p>{name}</p>
      <button onClick ={handleChange}>Change</button>
    </section>
  )
  
}

export default NameChange;
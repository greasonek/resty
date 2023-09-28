import { useState } from "react";
import Person from "./Person";

// hook: useState is a special function that can accept an arguemnt
// the argument represents the starting value of the state
// returns an array of a getter and a setter
function App() {
  // value and setValue are bananas
  const [value, setValue] = useState(5);
  const [name, setName] = useState('emma')
  // let number = 5;
  return (
    <>
      <h1>Hello</h1>
      <input name="myInput" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={()=> setValue(value + 1)}>add 1</button>
      <p>{value}</p>
      <p>{name}</p>
      <Person name={name} setName={setName}/>
      
    </>
  );
}

export default App;
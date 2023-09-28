import { useState, useEffect } from "react";


const Person = (props) => {
  const {name, setName} = props;
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  // use effect is a special function that takes 2 arguments: 
  // a function (an optionally the function would return a cleanup effect)
  // and an array of dependencies 
  // dependencies = things that could change that would effect how this function would run
  useEffect(() => {
    // great to use when:
    // you want something to run when the component mounts
    // you want something to run when a specific piece of state has changed (a dependency)
    if(!isCounting) return;
    setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000)
  }, [isCounting]);


  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName('')}>reset name</button>
      <h3>counter: {counter}</h3>
      <button onClick={()=> setIsCounting(!isCounting)}>is counting {isCounting? 'true' : 'false'}</button>
      </div>
  )
}
export default Person;
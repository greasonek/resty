// only dongthis one (useReducer) to help prepare for redux
import Chance from 'chance';

import { useReducer } from "react";
const chance = new Chance()
// define the initial state
const initialStateValue = {
  characters: [
    {name: 'Jim', color: 'peach'}, 
    {name: 'Pam', color: 'cream'}, 
    {name: 'Dwight', color: 'orange'}, 
    {name: 'Michael', color: 'tan'}, 
    {name: 'Angela', color: 'pink'},
  ],
  active: {}
}

function reducerFunction(state, action) {

  // return [...state, action.payload]
  // payload = {
  //   url: 'afsdf',
  //   method: 'get',
  //   data: {},
  // }


  switch (action.type){
    case 'ADD_CHARACTER': 
      return {
        ...state, 
        active: {}, 
        characters: [...state.characters, action.payload]
      };
    case 'ACTIVATE_CHARACTER':
      return {
        ...state, 
        active: state.characters.find(char => char.name === action.payload)
      } 
    case 'REMOVE_CHARACTER':
      return {
        ...state,
        active: {},
        characters: state.characters.filter((char) => char.name != action.payload)
      }
  }
}
// dispatch fires off a function to update some state
// 'state' and 'dispatch' are bananas
const Characters = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialStateValue)

  // const [history, dispatchHistory] =useReducer(historyReducer, [])

  const handleNewCharacter = () => {
    const char = {
      name: chance.name(),
      color: chance.color()
    };

    const action = {
      type: 'ADD_CHARACTER',
      payload: char
    }
    dispatch(action);
  }

  const handleActivateCharacter = (name) => {
    const action = {
      type:'',
      payload: name
    }
    dispatch(action);

  const handleRemoveCharacter = (nameofCharacterToRemove) => {
    const action = {
      type: 'REMOVE_CHARACTER',
      payload: name,
    }
    dispatch(action);
  }
  }
  return <div>
    <h1>Characters in The Office</h1>
    <strong>
      {state.active.name ? `${state.active.name} is ${state.active.color}` 
      : 'Click a character to learn their secret'}
    </strong>
    <ul>
      {state.characters.map(char => <li key={char.name} 
      onClick={() => handleActivateCharacter(char.name)}>{char.name}</li>)}
      onDoubleClick={()=> handleRemoveCharacter(char.name)}
    </ul>
    </div>;
}

export default Characters;
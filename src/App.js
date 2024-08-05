import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case 'Increment' :
      return {...state , count: state.count+1};
    case 'Decrement' :
      return {...state , count: state.count-1};
    case 'UserInputValue' :
      return {...state , userInput: action.payload};
    case 'tgColor' :
      return {...state , color: false}
    default:
      throw new Error();
  }
}

const ACTION = {
  INCREMENT: 'Increment',
  DECREMENT: 'Decrement', 
  USERINPUTVALUE: 'UserInputValue',
  TGCOLOR: 'tgColor'
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0 , userInput: '', color: true})

  return (
    <div className='App' style={{color: state.color ? '#9b870c' : 'Black'}}>
      <input type='text'
        placeholder='Enter an input'
        value = {state.userInput}
        onChange={(e) => dispatch({type: ACTION.USERINPUTVALUE, payload: e.target.value})}
       /> <br></br>
       <br></br>
       {state.count}
       <button onClick={() => dispatch({type: ACTION.INCREMENT})}>+</button> 
       <button onClick={() => dispatch({type: ACTION.DECREMENT})}>-</button>
       <button onClick={() => dispatch({type: ACTION.TGCOLOR})}>Color</button> <br></br><br></br>

       {state.userInput}
    </div>
  );
}

export default App;

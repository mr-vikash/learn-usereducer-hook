
import './App.css';
import Header from './components/Header';
import { useReducer } from 'react';

const App =()=> {
  const reducer =(state,action)=>
  {
     if(action.type==="inc")
     {
      return state = state + 2;
     }
     else if(action.type==="dec")
     {
      return state=state-2;
     }
     else if(action.type==="mul")
     {
      return state = state*2;
     }
     else if(action.type ==="div")
     {
      return state = state/2;
     }
     return state;
  } 
  const [state,dispatch] = useReducer(reducer,0)
  return (
    <div className="App">
      <Header/>
      <h2>Press button for doing mathematical operation by 2</h2>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"inc"})}>Add</button>
      <button onClick={()=>dispatch({type:"dec"})}>Dec</button>
      <button onClick={()=>dispatch({type:"mul"})}>Mul</button>
      <button onClick={()=>dispatch({type:"div"})}>Div</button>
    </div>
  );
}

export default App;

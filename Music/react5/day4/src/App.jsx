import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Counter from './Counter'


function App() {
  let[state,setState]=useState(0) 
  function inc(){
    setState(state+1)
  }
  function des(){
    setState(state-1)
    if(state <= 0 ){
      setState(0) 
    }
  }
  function restart(){
    setState(state=0)
  }
  return (
    <div className="App">
      <p>{state}</p>
      
      <div className='animated-border-box'>
      <h1 id="cv">Counter up</h1>
      <div className='btn'>
      <button onClick={des} >Decrement</button>
      <Counter a={state}/>
      <button onClick={inc} id="bm">Increment</button>
      
      </div>
      
      </div>
      
  

   
 
  
</div>
  

    
  );
}

export default App;
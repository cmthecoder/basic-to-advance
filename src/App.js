import './App.css';
import { useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  if(action.type === 'celebrity_visit') return {money: state.money + 5000}
  return state
}

function App() {

  const intialState = {money: 100}
  const [state, dispatch] = useReducer(reducer, intialState)

return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'celebrity_visit'})}>Celebrity Visit</button>
      </div>
    </div>
  );
}

export default App;

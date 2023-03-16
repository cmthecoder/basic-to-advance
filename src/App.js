import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';


function App() {
  const [word, setWord] = useState('Eat')

  const handleClick = () => {
    setWord('Drink')
  }

  return (
    <div className="App">
      <Heading message={word + ' at Little Lemon'}/>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [toggle, setToggle] = useState(false)

  const clickHandler = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    document.title = toggle ? 'Welocome to little lemon' : 'Using useEffect Hook'
  }, [toggle])

return (
    <div className="App">
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle message
      </button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}

export default App;

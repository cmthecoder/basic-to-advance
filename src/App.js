import './App.css';
import { useState } from 'react';


function App() {

  const [name , setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label>Name: </label>
            <input
              type="text"
              placeholder='Name'
              name='name'
              value={name}
              onChange={handleChange}/>
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

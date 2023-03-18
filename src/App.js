import './App.css';
import { useState } from 'react';


function App() {

  const [name , setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    console.log('form submitted')
  }

return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor='name'>Name: </label>
            <input
              id='name'
              type="text"
              placeholder='Name'
              name='name'
              value={name}
              onChange={handleChange}/>
          </div>
          <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

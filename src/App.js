import './App.css';
import { useState } from 'react';


function App() {

  const [score , setScore] = useState('10')
  const [comment, setComment] = useState('')

  const handleChange = (e) => {
    setScore(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Number(score) <5 && comment.length <= 10) {
      alert('Please provide a comment explaining why the experience was poor.')
      return
    }

    console.log('Form submitted')
    setComment('')
    setScore('10')
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }


return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label htmlFor="">Score: {score} ⭐️</label>
            <input
              type="range"
              min='0'
              max='10'
              value={score}
              onChange={handleChange}
            />
          </div>
          <div className='Field'>
            <label htmlFor="comments">Comment:</label>
            <textarea
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

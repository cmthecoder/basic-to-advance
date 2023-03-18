import React from 'react'
import { useState } from 'react'

const GoalForm = (props) => {
  const [formData, setFormData] = useState({goal: '', by: ''})

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    props.onAdd(formData)
    setFormData({ goal: '', by: ''})
  }
  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
        <input type="text" name='by' placeholder='By...' value={formData.by} onChange={changeHandler} />
        <button type='submit'>Submit Goal</button>
      </form>
    </>
  )
}

export default GoalForm
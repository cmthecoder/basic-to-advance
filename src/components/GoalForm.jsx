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
      
    </>
  )
}

export default GoalForm
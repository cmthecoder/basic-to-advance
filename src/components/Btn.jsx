import React from 'react'

const Btn = () => {
  // const clickHandler = () => {
  //   console.log('hey')
  // }


  const mouseOverHandler = () => {
    console.log('mouse over')
  }

  

  return (
    <>
      <button onMouseOver={mouseOverHandler}>Click Me</button>
    </>
  )
}

export default Btn
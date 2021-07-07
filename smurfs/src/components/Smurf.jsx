import React from 'react'

const Smurf = props => {
  const { name, age, height } = props

  return(
    <p>Hello! It's {name}. I'm {age}, and {height} tall!</p>
  )
}

export default Smurf
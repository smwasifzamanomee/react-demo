import React from 'react'

const Button = () => {
    const onClick = () => {
        console.log('click')
    }
  return (
    <button onClick={onClick} className='btn'>Click</button>
  )
}
export default Button;
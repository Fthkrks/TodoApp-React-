import React from 'react'

const Button = (props) => {
  return (
    <button className={`rounded p-2 text-white ${props.className}`} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button
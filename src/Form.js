import React from 'react'

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" placeholder="Enter city" />
      <button>Search</button>
    </form>
  )
}

export default Form

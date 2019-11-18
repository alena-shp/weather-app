import React from 'react'
import './Form.scss'

const Form = props => {
  return (
    <form onSubmit={props.getWeather} className="WatherForm">
      <input type="text" placeholder="Enter city" name="city"/>
      <button type="submit" variant="contained">
        Search
      </button>
    </form>
  )
}

export default Form

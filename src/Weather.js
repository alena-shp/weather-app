import React from 'react'

const Weather = props => {
  return <div>
    <p>{props.city}</p>
    <p>Temperature {props.temperature}</p>
    <p>{props.error}</p>
  </div>
}

export default Weather

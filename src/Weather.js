import React from 'react'

const Weather = props => {
  return <div>
    <p>City</p>
    <p>Temperature {props.temperature}</p>
    <p>{props.error}</p>
  </div>
}

export default Weather

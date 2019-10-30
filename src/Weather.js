import React from 'react'

const Weather = props => {
  console.log(props)
  return (
    <div>
      <p>{props.city}</p>
      <p>Temperature {props.temperature}</p>
      <p>{props.description}</p>
      <p>Sunrise {props.sunrise}</p>
      <p>Sunset {props.sunset}</p>
      <p>Humidity {props.humidity}</p>
      <p>Pressure {props.pressure}</p>
      <p>Deg {props.deg}</p>
      <p>Speed {props.speed}</p>
      <p>{props.error}</p>
    </div>
  )
}

export default Weather

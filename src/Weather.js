import React from 'react'
import sun from './foto/sun.jpg'
import rain from './foto/rain.jpg'
import snow from './foto/snow.jpg'
import clouds from './foto/clouds.jpg'



const Weather = props => {
  console.log(props.icon)

  if (props.error !== '') {
    return <p>{props.error}</p>
  }
  return (
    <div>
      {props.icon === '01d' && <img src={sun} alt="" />}
      {props.icon === '01n' && <img src={sun} alt="" />}
      {props.icon === '02d' && <img src={clouds} alt="" />}
      {props.icon === '02n' && <img src={clouds} alt="" />}
      {props.icon === '03d' && <img src={clouds} alt="" />}
      {props.icon === '03n' && <img src={clouds} alt="" />}
      {props.icon === '04d' && <img src={clouds} alt="" />}
      {props.icon === '04n' && <img src={clouds} alt="" />}
      {props.icon === '09d' && <img src={rain} alt="" />}
      {props.icon === '09n' && <img src={rain} alt="" />}
      {props.icon === '10d' && <img src={rain} alt="" />}
      {props.icon === '10n' && <img src={rain} alt="" />}
      {props.icon === '11d' && <img src={rain} alt="" />}
      {props.icon === '11n' && <img src={rain} alt="" />}
      {props.icon === '13d' && <img src={snow} alt="" />}
      {props.icon === '13n' && <img src={snow} alt="" />}
      {props.icon === '50d' && <img src={snow} alt="" />}
      {props.icon === '50n' && <img src={snow} alt="" />}

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
      </div>
    </div>
  )
}

export default Weather

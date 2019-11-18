import React from 'react'
import './Weather.scss'
import clearSky from './icon/clearSky.svg'
import brokenClouds from './icon/fewClouds.svg'
import fewClouds from './icon/fewClouds.svg'
import rain from './icon/rain.svg'
import showerRain from './icon/showerRain.svg'
import thunderstorm from './icon/thunderstorm.svg'
import scatteredClouds from './icon/scatteredClouds.svg'
import snow from './icon/snow.svg'

const Weather = props => {
  if (props.error !== '') {
    return <p>{props.error}</p>
  }
  return (
    <div className="Weather">
      <div className="Weather__icons">
        {props.icon === '01d' && <img src={clearSky} alt="" />}
        {props.icon === '01n' && <img src={clearSky} alt="" />}
        {props.icon === '02d' && <img src={fewClouds} alt="" />}
        {props.icon === '02n' && <img src={fewClouds} alt="" />}
        {props.icon === '03d' && <img src={scatteredClouds} alt="" />}
        {props.icon === '03n' && <img src={scatteredClouds} alt="" />}
        {props.icon === '04d' && <img src={brokenClouds} alt="" />}
        {props.icon === '04n' && <img src={brokenClouds} alt="" />}
        {props.icon === '09d' && <img src={showerRain} alt="" />}
        {props.icon === '09n' && <img src={showerRain} alt="" />}
        {props.icon === '10d' && <img src={rain} alt="" />}
        {props.icon === '10n' && <img src={rain} alt="" />}
        {props.icon === '11d' && <img src={thunderstorm} alt="" />}
        {props.icon === '11n' && <img src={thunderstorm} alt="" />}
        {props.icon === '13d' && <img src={snow} alt="" />}
        {props.icon === '13n' && <img src={snow} alt="" />}
        {props.icon === '50d' && <img src={snow} alt="" />}
        {props.icon === '50n' && <img src={snow} alt="" />}
      </div>

      <div className="Weather__information">
        <div className="Weather__common">
          <p className="Weather__common-temperature">{props.temperature} º</p>
          <div>
            <p>{props.city}</p>
            <p>{props.description}</p>
          </div>
        </div>
        <div className="Weather__details">
          <div className="Weather__details-sun">
            <p>Sunrise {props.sunrise}</p>
          </div>
          <p>Humidity {props.humidity}</p>
          <p>Pressure {props.pressure}</p>
          <p>Speed {props.speed}</p>
        </div>
      </div>
    </div>
  )
}

export default Weather

import React from 'react'
import './App.css'
import Form from './Form'
import Weather from './Weather'

const KEY_API = '11cadd34713cb737ab290c23d11d8764'

class App extends React.Component {
  state = {
    city: undefined,
    temperature: undefined,
    description: undefined,
    sunrise: undefined,
    sunset: undefined,
    humidity: undefined,
    pressure: undefined,
    deg: undefined,
    speed: undefined,
    icon: undefined,
    error: undefined
  }

  getWeather = async e => {
    e.preventDefault()
    const city = e.target.elements.city.value
    if (city === '') {
      this.setState({
        city: undefined,
        temperature: undefined,
        description: undefined,
        sunrise: undefined,
        sunset: undefined,
        humidity: undefined,
        pressure: undefined,
        deg: undefined,
        speed: undefined,
        icon: undefined,
        error: 'Enter the name of the city'
      })
    } else {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_API}&units=metric`
      )
      const data = await response.json()

      if (city === data.name) {
        this.setState({
          city: data.name,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          deg: data.wind.deg,
          speed: data.wind.speed,
          icon: data.weather[0].icon,
          error: ''
        })
      } else if (city !== data.name) {
        this.setState({
          city: undefined,
          temperature: undefined,
          description: undefined,
          sunrise: undefined,
          sunset: undefined,
          humidity: undefined,
          pressure: undefined,
          deg: undefined,
          speed: undefined,
          icon: undefined,
          error: 'City not found'
        })
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <div className="App__header-title">
            <h1>knowFORECAST</h1>
            <h5>find out the weather in your city</h5>
          </div>
          <Form getWeather={this.getWeather} getClik={this.getClik} />
        </div>
        <Weather
          city={this.state.city}
          temperature={this.state.temperature}
          description={this.state.description}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          deg={this.state.deg}
          speed={this.state.speed}
          icon={this.state.icon}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App

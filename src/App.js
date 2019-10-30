import React from 'react'
import './App.css'
import Form from './Form'
import Weather from './Weather'

const KEY_API = '11cadd34713cb737ab290c23d11d8764'

class App extends React.Component {
  state = {
    city: undefined,
    temp: undefined,
    error: undefined
  }

  getWeather = async e => {
    e.preventDefault()
    let city = e.target.elements.city.value
    if (city) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_API}&units=metric`
      )
      const data = await response.json()
      console.log(data)
      this.setState({
        city: data.name,
        temp: Math.round(data.main.temp),
        error: ''
      })
    } else {
      this.setState({
        city: undefined,
        temp: undefined,
        error: 'Enter the name of the city'
      })
    }
  }
  render() {
    return (
      <div>
        <h1>knowFORECAST</h1>
        <h5>find out the weather in your city</h5>
        <Form getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          temperature={this.state.temp}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App

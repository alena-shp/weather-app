import React from 'react'
import './App.css'
import Form from './Form'
import Weather from './Weather'

//const KEY_API = '11cadd34713cb737ab290c23d11d8764'

class App extends React.Component {
  getWeather = async e => {
    e.preventDefault()
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Pskov&appid=11cadd34713cb737ab290c23d11d8764&units=metric`
    )
    const data = await response.json()
    console.log(data)
  }
  render() {
    return (
      <div>
        <h1>knowFORECAST</h1>
        <h5>find out the weather in your city</h5>
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    )
  }
}

export default App

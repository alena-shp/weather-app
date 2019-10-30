import React from 'react'
import './App.css'
import Form from './Form'
import Weather from './Weather'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>knowFORECAST</h1>
        <h5>find out the weather in your city</h5>
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App

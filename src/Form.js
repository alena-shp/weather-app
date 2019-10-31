import React from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <Input type="text" placeholder="Enter city" name="city" />
      <Button type="submit" variant="contained" color="primary">Search</Button>
    </form>
  )
}

export default Form

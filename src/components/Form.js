import React from "react"

//I kept this as a non-stateless for even though I could make it stateless so i'd have both expamples in the app for future reference
class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="city..." />
        <input type="text" name="country" placeholder="country..." />
        <button>Get Weather</button>
      </form>
    )
  }
}

export default Form;
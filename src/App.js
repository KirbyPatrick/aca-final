import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const API_KEY = "ea98074eccba05ca87fcda45a93139a7"
// const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=Austin,us&appid=${API_KEY}&units=metric`;
// const savedURL = `https://api.openweathermap.org/data/2.5/weather?q=Austin,us&appid=ea98074eccba05ca87fcda45a93139a7`

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Austin,us&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
  }



  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather/>
      </div> 
    );
  }
}

export default App;
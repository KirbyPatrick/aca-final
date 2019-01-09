import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const API_KEY = "ea98074eccba05ca87fcda45a93139a7"
// const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=Austin,us&appid=${API_KEY}&units=metric`;
// const savedURL = `https://api.openweathermap.org/data/2.5/weather?q=Austin,us&appid=ea98074eccba05ca87fcda45a93139a7`

class App extends React.Component {
  state = {
    //this is setting the defult state
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault(); 
    //the 'e' above as well as this method < prevents the page from auto reloading 
    //when the 'get weather' button is pressed.  the 'e' stands for event and the method 
    //prevents the defult settings from being applied to the page, like auto reload
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if(city && country) {
      console.log(data);
      this.setState({
        //this code is tying our state to the API and telling it what to pull and update the state with
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        //this code is tying our state to the API and telling it what to pull and update the state with
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please submit your location"
      });
    }
  }



  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather  //the below props allow this info to be passed from app.js, to weather.js so they can be used by the component
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description} 
          error={this.state.error}
        />
      </div> 
    );
  }
}

export default App;
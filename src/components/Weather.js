import React from "react"
//this component does not use state so it's written out in stateless form
const Weather = (props) => (
  <div>
    {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Weather Conditions: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
);


export default Weather;
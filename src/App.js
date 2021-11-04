import React, { useState, useEffect } from "react";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";
import { getFiveForecasts } from "./utils/actions";
import { cities } from "./utils/cities";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Prague");
  const [forecasts, setForecasts] = useState(null);

  const fetchWeather = (city) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        process.env.REACT_APP_MY_API_ID
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  const getForecast = (city) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric&appid=" +
        process.env.REACT_APP_MY_API_ID
    )
      .then((response) => response.json())
      .then((data) => {
        setForecasts(getFiveForecasts(data.list));
      });
  };

  useEffect(() => {
    fetchWeather(city);
    getForecast(city);
  }, [city]);

  /*
  const handleButtonClick = (event) => {
    setCity(event.target.innerText);
  };*/

  const onCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>

        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={onCityChange}
          >
            {cities.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
        </div>

        <div className="weather">
          <div className="button-group">
            {/* <button className="button" onClick={handleButtonClick}>
              Prague
            </button>
             <button className="button" onClick={handleButtonClick}>
              Reykjavik
            </button>
            <button className="button" onClick={handleButtonClick}>
              Tenerife
            </button> */}
          </div>
          <CurrentWeather weather={weather} city={city} />
          <div className="weather__forecast" id="predpoved">
            {forecasts?.map((forecast, index) => (
              <Forecast key={index} forecast={forecast} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

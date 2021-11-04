import React from "react";
import { getFormatDate } from "../utils/actions";

export const Forecast = ({ forecast }) => {
  return (
    <div className="forecast">
      <div className="forecast__day">
        {forecast && getFormatDate(forecast.dt)}
      </div>
      <div className="forecast__icon">
        {forecast && (
          <img
            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            style={{ height: "100%" }}
            alt="current weather icon"
          />
        )}
      </div>
      <div className="forecast__temp">
        {forecast && Math.round(forecast.main.temp)} °C
      </div>
    </div>
  );
};

import React from "react";

export default function Home({ data, getWeather, degree, changeHandler }) {
  return (
    <div className="home-container">
      {data.name && (
        <div className="home-info">
          <div className="degree-section">
            <h1 className="home-degree">{Math.round(degree)}</h1>
            <span>&#8451;</span>
          </div>
          <div className="location-time">
            <h1 className="home-location">{data.name}</h1>
            <h5>Friday, 23 December 2023, 23:50</h5>
          </div>
          <div className="weather-status">
            <h2><i class="fa-solid fa-cloud"></i></h2>
            <p>{ data.weather[0].main }</p>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";

export default function Rightbar({ data, getWeather, changeHandler }) {
  return (
    <div class="bg-blur">
      <div class="sidebar">
        <div className="search-bar">
          <input
            className="search-input"
            onKeyDown={getWeather}
            onChange={changeHandler}
            placeholder="Enter Location"
          />
          <i onClick={getWeather}class="fa-solid fa-magnifying-glass"></i>
        </div>
        {data.name && (
          <div className="weather-details">
            <h5 className="weather-title">Weather Details</h5>
            <ul className="detail-list">
              <div className="detail">
                <li className="weather-detail">Feels like</li>
                <div className="detail-right-info">
                  <p>{Math.round(data.main["feels_like"])}</p>
                  <span>&#8451;</span>
                  <i class="fa-solid fa-person-dots-from-line"></i>
                </div>
              </div><div className="detail">
                <li className="weather-detail">Temp max</li>
                <div className="detail-right-info">
                  <p>{Math.ceil(data.main["temp_max"])}</p>
                  <span>&#8451;</span>
                  <i class="fa-solid fa-temperature-arrow-up"></i>
                </div>
              </div>
              <div className="detail">
                <li className="weather-detail">Temp min</li>
                <div className="detail-right-info">
                  <p>{Math.floor(data.main["temp_min"])}</p>
                  <span>&#8451;</span>
                  <i class="fa-solid fa-temperature-arrow-down"></i>
                </div>
              </div>
              <div className="detail">
                <li className="weather-detail">Humidity</li>
                <div className="detail-right-info">
                  <p>{data.main.humidity}</p>
                  <span>%</span>
                  <i class="fa-solid fa-droplet"></i>
                </div>
              </div>
              <div className="detail">
                <li className="weather-detail">Cloudy</li>
                <div className="detail-right-info">
                  <p>{data.clouds.all}</p>
                  <span>%</span>
                  <i class="fa-solid fa-cloud-sun"></i>
                </div>
              </div>
              <div className="detail">
                <li className="weather-detail">Wind</li>
                <div className="detail-right-info">
                  <p>{data.wind.speed}</p>
                  <span>km/h</span>
                  <i class="fa-solid fa-wind"></i>
                </div>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

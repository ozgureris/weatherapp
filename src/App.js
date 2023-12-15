import { useState } from "react";
import axios from "axios";
import "./App.css";
import Home from './components/home'
import Rightbar from "./components/rightbar";

function App() {
  const [search, setSearch] = useState("Ankara");
  const [data, setData] = useState({});
  const degree = data.name ? data.main.temp : "";

  const key = "e06e9849c802b38170f10bac05520b54";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`;

  const changeHandler = (e) => {
    setSearch(e.target.value);
 };

  async function getWeather(event) {
    try {
      if (event.key === "Enter") {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      alert("Wrong Location!");
    }
  }

  return (
    <div className="main-container">
      <Home data={data} degree={degree} />
      <Rightbar data={data} getWeather={getWeather} changeHandler={changeHandler}/> 
    </div>
  );
}

export default App;

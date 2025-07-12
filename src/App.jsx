import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [city, setCity] = useState("");
  const [showWeather, setShowWeather] = useState(false);
  const [data, setData] = useState({
    windSpeed: "",
    humidity: "",
    cloud: "",
    cityName: "",
    desc: "",
    deg: "",
    sunrise: "",
    sunset: "",
    seaLevel: "",
  });

  function handleCity(e) {
    setCity(e.target.value);
  }

  function getWeather() {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=084b07eee397c0748a62cc3c647c2e8c`
    )
      .then((res) => {
        const data = res.data;
        setData({
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
          cloud: data.clouds.all,
          cityName: data.name,
          desc: data.weather[0].description,
          deg: data.wind.deg,
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
          seaLevel: data.main.sea_level || "N/A",
        });
        setShowWeather(true);
      })
      .catch((err) => {
        alert("City not found");
        console.log(err);
        setShowWeather(false);
      });
  }

  return (
    <div className="text-center text-white min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 p-5">
      <h1 className="m-1 p-5 font-bold text-3xl">Weather App</h1>

      <div className="flex justify-center gap-5 items-center">
        <input
          onChange={handleCity}
          className="px-5 py-2 bg-white/20 backdrop-blur-lg rounded-lg w-72 md:w-96 text-white placeholder-white"
          type="text"
          placeholder="Enter your city"
        />
        <FaSearch
          onClick={getWeather}
          size={20}
          className="cursor-pointer hover:scale-110 transition"
        />
      </div>

      <div className="mt-8 space-y-2">
        <h1 className="text-2xl font-bold">{data.cityName}</h1>
        <h2 className="capitalize">{data.desc}</h2>
        
        {showWeather && <h2>{data.deg}° Wind Direction</h2>}
      </div>

      {showWeather && <WeatherInfo data={data} />}
    </div>
  );
}

export default App;

import axios from "axios";
import { useState } from "react";
import { FaSearch, FaWind, FaCloudSun} from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

function App() {

  const [city, setCity] = useState("")
  const [windSpeed, setWindSpeed] = useState("")
  const [humidity, setHumidity] = useState("")
  const [cloud, setCloud] = useState("")
  const [cityname, setCityName] = useState("")
  const [desc, setDesc] = useState("")
  const [deg, setDeg] = useState("")

  function handleCity(e) 
  {
    setCity(e.target.value)
  }

  function getWeather() 
  {
    const weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=084b07eee397c0748a62cc3c647c2e8c`)
    
    weatherData.then(function(success) {
      console.log(success.data);
      setWindSpeed(success.data.wind.speed) 
      setHumidity(success.data.main.humidity)   
      setCloud(success.data.clouds.all)  
      setCityName(success.data.name)
      setDesc(success.data.weather[0].description)
      setDeg(success.data.wind.deg)
    })
  }

  return (
    <div className="text-center text-white">
      <h1 className="m-1 p-5 font-bold text-3xl">Weather App</h1>
      <div className="flex justify-center gap-5 items-center ">
        <input onChange={handleCity} className="px-5 py-1 bg-gray-500/70 backdrop-blur-3xl rounded-lg w-96 text-white " type="text" placeholder="Enter your city"  />       
        <FaSearch onClick={getWeather} size={20} className="cursor-pointer"/>        
      </div>
      <div className="mt-8">
        <h1>{cityname}</h1>
        <h1>{desc}</h1>
        <h1>{deg} </h1>
      </div>
      <div className="mx-auto grid  gap-5 w-36 md:w-fit md:grid-cols-3 md:gap-10  ">
        <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">
          <FaWind size={24} className="mb-2" />
          <h2 className="font-semibold">Windspeed</h2>
          <p>{windSpeed} m/s</p>
        </div>
         <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">
         <WiHumidity size={30}/>        
          <h2>Humidity</h2>
          <p>{humidity}%</p>
        </div>
         <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">   
          <FaCloudSun size={24}/>       
          <h2>Clouds</h2>
          <p>{cloud}%</p>
        </div>
      </div>
    </div>
  )
}

export default App

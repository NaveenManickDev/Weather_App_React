import { useState } from "react";
import { FaSearch, FaWind, FaCloudSun} from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

function App() {

  const [city, setCity] = useState("")

  function handleCity(e) {
    setCity(e.target.value)
  }

  return (
    <div className="text-center text-white">
      <h1 className="m-1 p-5 font-bold text-3xl">Weather App</h1>
      <div className="flex justify-center gap-5 items-center ">
        <input onChange={handleCity} className="px-5 py-1 text-black bg-gray-500/70 backdrop-blur-3xl rounded-lg w-96 " type="text" placeholder="Enter your city"  />       
        <FaSearch size={20} className="cursor-pointer"/>        
      </div>
      <div className="mt-8">
        <h1>Chennai</h1>
        <h1>overcast clouds</h1>
        <h1>31.04 °C</h1>
      </div>
      <div className="mx-auto grid  gap-5 w-36 md:w-fit md:grid-cols-3 md:gap-10  ">
        <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">
          <FaWind size={24} className="mb-2" />
          <h2 className="font-semibold">Windspeed</h2>
          <p>5.51 m/s</p>
        </div>
         <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">
         <WiHumidity size={30}/>        
          <h2>Humidity</h2>
          <p>65%</p>
        </div>
         <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">   
          <FaCloudSun size={24}/>       
          <h2>Clouds</h2>
          <p>100%</p>
        </div>
      </div>
    </div>
  )
}

export default App

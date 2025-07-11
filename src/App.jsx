// import axios from "axios";
// import { useState } from "react";
// import { FaSearch, FaWind, FaCloudSun} from "react-icons/fa";
// import { WiHumidity } from "react-icons/wi";

// function App() {

//   const [city, setCity] = useState("")
//   const [windSpeed, setWindSpeed] = useState("")
//   const [humidity, setHumidity] = useState("")
//   const [cloud, setCloud] = useState("")
//   const [cityname, setCityName] = useState("")
//   const [desc, setDesc] = useState("")
//   const [deg, setDeg] = useState("")
//   const [sunrise, setSunrise] = useState("")
//   const [sunset, setSunset] = useState("")
//   const [seaLevel, setSeaLevel] = useState("")

//   function handleCity(e) 
//   {
//     setCity(e.target.value)
//   }

//   function getWeather() 
//   {
//     const weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=084b07eee397c0748a62cc3c647c2e8c`)
    
//     weatherData.then(function(success) {
//       console.log(success.data);
//       setWindSpeed(success.data.wind.speed) 
//       setHumidity(success.data.main.humidity)   
//       setCloud(success.data.clouds.all)  
//       setCityName(success.data.name)
//       setDesc(success.data.weather[0].description)
//       setDeg(success.data.wind.deg)
//       setSunrise(success.data.sys.sunrise)
//       setSunset(success.data.sys.sunset)
//       setSeaLevel(success.data.main.sea_level)
//     })
//   }

//   return (
//     <div className="text-center text-white">
//       <h1 className="m-1 p-5 font-bold text-3xl">Weather App</h1>
//       <div className="flex justify-center gap-5 items-center ">
//         <input onChange={handleCity} className="px-5 py-1 bg-gray-500/70 backdrop-blur-3xl rounded-lg w-96 text-white " type="text" placeholder="Enter your city"  />       
//         <FaSearch onClick={getWeather} size={20} className="cursor-pointer"/>        
//       </div>
//       <div className="mt-8">
//         <h1>{cityname}</h1>
//         <h1>{desc}</h1>
//         <h1>{deg} </h1>
//       </div>
//       <div className="mx-auto grid  gap-5 w-36 md:w-fit md:grid-cols-3 md:gap-10  ">
//         <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">
//           <FaWind size={24} className="mb-2" />
//           <h2 className="font-semibold">Windspeed</h2>
//           <p>{windSpeed} m/s</p>
//         </div>
//          <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">
//          <WiHumidity size={30}/>        
//           <h2>Humidity</h2>
//           <p>{humidity}%</p>
//         </div>
//          <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">   
//           <FaCloudSun size={24}/>       
//           <h2>Clouds</h2>
//           <p>{cloud}%</p>
//         </div>
//         <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">
//           <FaWind size={24} className="mb-2" />
//           <h2 className="font-semibold">SunRise</h2>
//           <p>{sunrise}</p>
//         </div>
//          <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">
//          <WiHumidity size={30}/>        
//           <h2>SunSet</h2>
//           <p>{sunset}</p>
//         </div>
//          <div className="bg-gray-400/35 p-5 rounded-lg mt-5 flex flex-col items-center text-center">   
//           <FaCloudSun size={24}/>       
//           <h2>Sea Level</h2>
//           <p>{seaLevel}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App


// import axios from "axios";
// import { useState } from "react";
// import { FaSearch, FaWind, FaCloudSun } from "react-icons/fa";
// import { WiHumidity } from "react-icons/wi";

// function App() {
//   const [city, setCity] = useState("");
//   const [data, setData] = useState({
//     windSpeed: "",
//     humidity: "",
//     cloud: "",
//     cityName: "",
//     desc: "",
//     deg: "",
//     sunrise: "",
//     sunset: "",
//     seaLevel: ""
//   });

//   function handleCity(e) {
//     setCity(e.target.value);
//   }

//   function getWeather() {
//     axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=084b07eee397c0748a62cc3c647c2e8c`)
//       .then((res) => {
//         const data = res.data;
//         setData({
//           windSpeed: data.wind.speed,
//           humidity: data.main.humidity,
//           cloud: data.clouds.all,
//           cityName: data.name,
//           desc: data.weather[0].description,
//           deg: data.wind.deg,
//           sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
//           sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
//           seaLevel: data.main.sea_level || "N/A",
//         });
//       })
//       .catch((err) => {
//         alert("City not found");
//         console.log(err);
//       });
//   }

//   // Card content array
//   const weatherInfo = [
//     { label: "Windspeed", value: `${data.windSpeed} m/s`, icon: <FaWind size={24} /> },
//     { label: "Humidity", value: `${data.humidity}%`, icon: <WiHumidity size={30} /> },
//     { label: "Clouds", value: `${data.cloud}%`, icon: <FaCloudSun size={24} /> },
//     { label: "Sunrise", value: data.sunrise, icon: <FaWind size={24} /> },
//     { label: "Sunset", value: data.sunset, icon: <WiHumidity size={30} /> },
//     { label: "Sea Level", value: data.seaLevel, icon: <FaCloudSun size={24} /> },
//   ];

//   return (
//     <div className="text-center text-white min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 p-5">
//       <h1 className="m-1 p-5 font-bold text-3xl">Weather App</h1>

//       <div className="flex justify-center gap-5 items-center">
//         <input
//           onChange={handleCity}
//           className="px-5 py-2 bg-white/20 backdrop-blur-lg rounded-lg w-72 md:w-96 text-white placeholder-white"
//           type="text"
//           placeholder="Enter your city"
//         />
//         <FaSearch
//           onClick={getWeather}
//           size={20}
//           className="cursor-pointer hover:scale-110 transition"
//         />
//       </div>

//       <div className="mt-8 space-y-2">
//         <h1 className="text-2xl font-bold">{data.cityName}</h1>
//         <h2 className="capitalize">{data.desc}</h2>
//         <h2>{data.deg}° Wind Direction</h2>
//       </div>

//       <div className="mx-auto grid gap-5 w-36 md:w-fit md:grid-cols-3 md:gap-10 mt-10">
//         {weatherInfo.map((item, index) => (
//           <div key={index} className="bg-white/20 p-5 rounded-xl flex flex-col items-center text-center text-white shadow-lg">
//             <div className="mb-2">{item.icon}</div>
//             <h2 className="font-semibold">{item.label}</h2>
//             <p>{item.value}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// import axios from "axios";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import WeatherInfo from "./components/WeatherInfo";

// function App() {
//   const [city, setCity] = useState("");
//   const [data, setData] = useState({
//     windSpeed: "",
//     humidity: "",
//     cloud: "",
//     cityName: "",
//     desc: "",
//     deg: "",
//     sunrise: "",
//     sunset: "",
//     seaLevel: "",
//   });

//   function handleCity(e) {
//     setCity(e.target.value);
//   }

//   function getWeather() {
//     axios(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=084b07eee397c0748a62cc3c647c2e8c`
//     )
//       .then((res) => {
//         const d = res.data;
//         setData({
//           windSpeed: d.wind.speed,
//           humidity: d.main.humidity,
//           cloud: d.clouds.all,
//           cityName: d.name,
//           desc: d.weather[0].description,
//           deg: d.wind.deg,
//           sunrise: new Date(d.sys.sunrise * 1000).toLocaleTimeString(),
//           sunset: new Date(d.sys.sunset * 1000).toLocaleTimeString(),
//           seaLevel: d.main.sea_level || "N/A",
//         });
//       })
//       .catch((err) => {
//         alert("City not found");
//         console.log(err);
//       });
//   }

//   return (
//     <div className="text-center text-white min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 p-5">
//       <h1 className="m-1 p-5 font-bold text-3xl">Weather App</h1>

//       <div className="flex justify-center gap-5 items-center">
//         <input
//           onChange={handleCity}
//           className="px-5 py-2 bg-white/20 backdrop-blur-lg rounded-lg w-72 md:w-96 text-white placeholder-white"
//           type="text"
//           placeholder="Enter your city"
//         />
//         <FaSearch
//           onClick={getWeather}
//           size={20}
//           className="cursor-pointer hover:scale-110 transition"
//         />
//       </div>

//       <div className="mt-8 space-y-2">
//         <h1 className="text-2xl font-bold">{data.cityName}</h1>
//         <h2 className="capitalize">{data.desc}</h2>
//         <h2>{data.deg}° Wind Direction</h2>
//       </div>

//       <WeatherInfo data={data} />
//     </div>
//   );
// }

// export default App;


import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [city, setCity] = useState("");
  const [showWeather, setShowWeather] = useState(false); // ✅ show after fetch
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
        const d = res.data;
        setData({
          windSpeed: d.wind.speed,
          humidity: d.main.humidity,
          cloud: d.clouds.all,
          cityName: d.name,
          desc: d.weather[0].description,
          deg: d.wind.deg,
          sunrise: new Date(d.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(d.sys.sunset * 1000).toLocaleTimeString(),
          seaLevel: d.main.sea_level || "N/A",
        });
        setShowWeather(true); // ✅ show info after successful fetch
      })
      .catch((err) => {
        alert("City not found");
        console.log(err);
        setShowWeather(false); // ❌ hide if error
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
        {/* ✅ Show wind direction only after getWeather is called */}
        {showWeather && <h2>{data.deg}° Wind Direction</h2>}
      </div>

      {/* ✅ Only show cards after weather is fetched */}
      {showWeather && <WeatherInfo data={data} />}
    </div>
  );
}

export default App;

import React from "react";
import WeatherCard from "./WeatherCard";
import { FaWind, FaCloudSun } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const WeatherInfo = ({ data }) => {
  const weatherInfo = [
    { label: "Windspeed", value: `${data.windSpeed} m/s`, icon: <FaWind size={24} /> },
    { label: "Humidity", value: `${data.humidity}%`, icon: <WiHumidity size={30} /> },
    { label: "Clouds", value: `${data.cloud}%`, icon: <FaCloudSun size={24} /> },
    { label: "Sunrise", value: data.sunrise, icon: <FaWind size={24} /> },
    { label: "Sunset", value: data.sunset, icon: <WiHumidity size={30} /> },
    { label: "Sea Level", value: data.seaLevel, icon: <FaCloudSun size={24} /> },
  ];

  return (
    <div className="mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-md mt-10 px-4">
  {weatherInfo.map((item, index) => (
    <WeatherCard key={index} {...item} />
  ))}
</div>
  );
};

export default WeatherInfo;
import React from "react";

const WeatherCard = ({ icon, label, value }) => {
  return (
    <div className="bg-white/20 p-5 rounded-xl flex flex-col items-center text-center text-white shadow-lg">
      <div className="mb-2">{icon}</div>
      <h2 className="font-semibold">{label}</h2>
      <p>{value}</p>
    </div>
  );
};

export default WeatherCard;
import React, { useEffect, useState } from 'react';
import './weatherApp.css';
import search_icon from '../Asserts/search.png';
import cloud_icon from '../Asserts/cloud.png';
import humidity_icon from '../Asserts/humidity.png';
import wind_icon from '../Asserts/wind.png';

const WeatherApp = () => {
  const apikey = "db2ea459efba0f37a91960d9aebd6327";
  const defaultCity = "London";
  const [data, setData] = useState({});
  const [cityInput, setCityInput] = useState(defaultCity);

  const fetchData = async () => {
    
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=Metric&appid=${apikey}`;
      fetch(api).then(res=>res.json()).then(res=>setData(res));
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  const search = () => {
    fetchData();
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input
          type='text'
          className='cityInput'
          placeholder='Enter city name'
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <div className='search_icon' onClick={search}>
          <img src={search_icon} alt='Search' />
        </div>
      </div>
      <div className='weather-image'>
        <img src={cloud_icon} alt='' />
      </div>
      <div className='weather-temp'>{data.main?.temp} °C</div>
      <div className='weather-location'>{data.name}</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} className='icon' alt='' />
          <div className='data'>
            <div className='humidity-percentage'>{data.main?.humidity} %</div>
            <br/>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} className='icon' alt='' />
          <div className='data'>
            <div className='wind-rate'>{data.wind?.speed} km/h</div>
            <br/>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

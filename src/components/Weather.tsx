import React, { FC } from 'react';
import styled from 'styled-components';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Header = styled.h1`
    font-size: 40px;
    font-family:  'sans-serif';
    padding-top: 30px;
    color: blueviolet;
  `;

const Para = styled.p`
  font-size: 20px;
  color: #22193b;
  font-family: sans-serif;
  
`;


const Weather: FC<WeatherProps> = ({ data }) => {
  
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);
  const val = data.weather[0].description.toUpperCase();
  
  return(
    
  <>
        <Header >{data.name} - {data.sys.country}</Header>
              <Para>{val}</Para>
              <Para >Temp</Para>
                <Para >{data.main.temp}K</Para>
                <Para>{fahrenheit}<sup></sup>&#8457;</Para>
                <Para>{celsius}<sup>&#8451;</sup></Para>
              <Para>Humidity</Para>
              <Para >{data.main.humidity}</Para>
              <Para >Pressure</Para>
              <Para>{data.main.pressure}</Para>
              <Para >Wind</Para>
              <Para className="title">{data.wind.speed} m/s</Para>
  </>
  );
}

export default Weather;
import React from 'react';
import { WeatherState } from '../context/WeatherProvider';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  z-index:0;
`;

const Title = styled.h1`
  font-size: 7rem;
  font-weight: 500;
  margin-bottom: 5px;
  color: #0a1128;
  z-index: 100 ;
`;

const WeatherImage = styled.img`
  width: 180px; 
  height: 180px; 
  transform: translateY(-10px);
`;

const Description = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0;
  color: #0a1128; 
`;

const LoadingText = styled.p`
`;

const SearchIcon = styled.i`
  position: absolute;
  top: 1rem; 
  right: 1rem; 
  font-size: 3rem;
  cursor: pointer;
`;

const RoundedDiv = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 50%;
  height: 40rem; 
  width: 125%;
  z-index: -1;
  position: absolute; 
  margin-top: -210px;
`;

const Header = () => {
  const { currentWeather } = WeatherState();

  return (<>
      <StyledHeader>
        <RoundedDiv/>
        <SearchIcon className="fas fa-magnifying-glass-location" />
        {currentWeather ? (
        <>
          <Title>{currentWeather.name}</Title>
          <Description>{currentWeather.weather[0].main}</Description>
          <WeatherImage
            src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
            alt={currentWeather.weather[0].main}
            title={currentWeather.weather[0].description}
            />
        </>
      ) : (
        <LoadingText>Loading weather data...</LoadingText>
        )}
    </StyledHeader>
        </>
  );
};

export default Header;

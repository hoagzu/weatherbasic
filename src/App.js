import './App.scss';
import Section from './component/Section';
import Heading from './component/Heading';
import SearchandFilters from './component/SearchandFilters';
import Display from './component/Display';

import { useState, useEffect } from 'react';
import axios from 'axios';



const api = {
  key: "952e7dcf69377d72e47dd606c5e88aee",
  base: `https://api.openweathermap.org/data/2.5/`,
};

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (city) {
      axios
        .get(`${api.base}weather?q=${city}&appid=${api.key}&units=metric`)
        .then(res => {
          setWeather(res.data);
        })
        .catch(() => setWeather(null));
    }
  }, [city]);

  const handleKeyPress = (search) => {
    if (search) {
      setCity(search);
    }
  };

  return (
    <div className="App">
      
      <Heading />
      <Section />
      <SearchandFilters handleKeyPress={handleKeyPress} />
      <Display weather={weather} />
    </div>
  );
}

export default App;

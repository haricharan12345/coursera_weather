import React, { useState, useEffect } from 'react';
import './App.css'; // Importing CSS file for styling

function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const locationData = [
    { latitude: 52.367, longitude: 4.904, city: 'Amsterdam', country: 'Netherlands' },
    { latitude: 39.933, longitude: 32.859, city: 'Ankara', country: 'Turkey' },
    { latitude: 56.134, longitude: 12.945, city: 'Åstorp', country: 'Sweden' },
    { latitude: 37.983, longitude: 23.727, city: 'Athens', country: 'Greece' },
    { latitude: 54.597, longitude: -5.93, city: 'Belfast', country: 'Northern Ireland' },
    { latitude: 41.387, longitude: 2.168, city: 'Barcelona', country: 'Spain' },
    { latitude: 52.52, longitude: 13.405, city: 'Berlin', country: 'Germany' },
    { latitude: 46.948, longitude: 7.447, city: 'Bern', country: 'Switzerland' },
    { latitude: 43.263, longitude: -2.935, city: 'Bilbao', country: 'Spain' },
    { latitude: 50.847, longitude: 4.357, city: 'Brussels', country: 'Belgium' },
    { latitude: 47.497, longitude: 19.04, city: 'Bucharest', country: 'Romania' },
    { latitude: 59.329, longitude: 18.068, city: 'Budapest', country: 'Hungary' },
    { latitude: 51.483, longitude: -3.168, city: 'Cardiff', country: 'Wales' },
    { latitude: 50.937, longitude: 6.96, city: 'Cologne', country: 'Germany' },
    { latitude: 55.676, longitude: 12.568, city: 'Copenhagen', country: 'Denmark' },
    { latitude: 51.898, longitude: -8.475, city: 'Cork', country: 'Ireland' },
    { latitude: 53.349, longitude: -6.26, city: 'Dublin', country: 'Ireland' },
    { latitude: 55.953, longitude: -3.188, city: 'Edinburgh', country: 'Scotland' },
    { latitude: 43.7696, longitude: 11.255, city: 'Florence', country: 'Italy' },
    { latitude: 50.11, longitude: 8.682, city: 'Frankfurt', country: 'Germany' },
    { latitude: 43.254, longitude: 6.637, city: 'French Riviera', country: 'France' },
    { latitude: 32.65, longitude: -16.908, city: 'Funchal', country: 'Portugal' },
    { latitude: 36.14, longitude: -5.353, city: 'Gibraltar' },
    { latitude: 57.708, longitude: 11.974, city: 'Gothenburg', country: 'Sweden' },
    { latitude: 53.548, longitude: 9.987, city: 'Hamburg', country: 'Germany' },
    { latitude: 60.169, longitude: 24.938, city: 'Helsinki', country: 'Finland' },
    { latitude: 39.02, longitude: 1.482, city: 'Ibiza', country: 'Spain' },
    { latitude: 50.45, longitude: 30.523, city: 'Kyiv', country: 'Ukraine' },
    { latitude: 61.115, longitude: 10.466, city: 'Lillehammer', country: 'Norway' },
    { latitude: 38.722, longitude: -9.139, city: 'Lisbon', country: 'Portugal' },
    { latitude: 51.507, longitude: -0.127, city: 'London', country: 'England' },
    { latitude: 40.416, longitude: -3.703, city: 'Madrid', country: 'Spain' },
    { latitude: 39.695, longitude: 3.017, city: 'Mallorca', country: 'Spain' },
    { latitude: 53.48, longitude: -2.242, city: 'Manchester', country: 'England' },
    { latitude: 43.296, longitude: 5.369, city: 'Marseille', country: 'France' },
    { latitude: 27.76, longitude: -15.586, city: 'Maspalomas', country: 'Spain' },
    { latitude: 45.464, longitude: 9.19, city: 'Milan', country: 'Italy' },
    { latitude: 48.135, longitude: 11.582, city: 'Munich', country: 'Germany' },
    { latitude: 40.851, longitude: 14.268, city: 'Naples', country: 'Italy' },
    { latitude: 43.034, longitude: -2.417, city: 'Oñati', country: 'Spain' },
    { latitude: 59.913, longitude: 10.752, city: 'Oslo', country: 'Norway' },
    { latitude: 48.856, longitude: 2.352, city: 'Paris', country: 'France' },
    { latitude: 50.075, longitude: 14.437, city: 'Prague', country: 'Czech Republic' },
    { latitude: 64.146, longitude: -21.942, city: 'Reykjavík', country: 'Iceland' },
    { latitude: 56.879, longitude: 24.603, city: 'Riga', country: 'Latvia' },
    { latitude: 41.902, longitude: 12.496, city: 'Rome', country: 'Italy' },
    { latitude: 39.453, longitude: -31.127, city: 'Santa Cruz das Flores', country: 'Portugal' },
    { latitude: 28.463, longitude: -16.251, city: 'Santa Cruz de Tenerife', country: 'Spain' },
    { latitude: 57.273, longitude: -6.215, city: 'Skye', country: 'Scotland' },
    { latitude: 42.697, longitude: 23.321, city: 'Sofia', country: 'Bulgaria' },
    { latitude: 59.329, longitude: 18.068, city: 'Stockholm', country: 'Sweden' },
    { latitude: 59.437, longitude: 24.753, city: 'Tallinn', country: 'Estonia' },
    { latitude: 18.208, longitude: 16.373, city: 'Vienna', country: 'Austria' },
    { latitude: 52.229, longitude: 21.012, city: 'Warsaw', country: 'Poland' },
    { latitude: 53.961, longitude: -1.07, city: 'York', country: 'England' },
    { latitude: 47.376, longitude: 8.541, city: 'Zurich', country: 'Switzerland' },
  ];

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const selectedLocation = locationData.find(location => location.city === selectedCity);
      if (selectedLocation) {
        try {      
          const response = await fetch(`https://www.7timer.info/bin/astro.php?lon=${selectedLocation.longitude}&lat=${selectedLocation.latitude}&ac=0&unit=metric&output=json&tzshift=0`);
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    if (selectedCity !== '') {
      fetchData();
    }
  }, [selectedCity, locationData]);

  return (
    <div className="app-container">
      <h1>Weather Data</h1>
      <div className="select-container"> 
        <label htmlFor="citySelect">Select City:</label>
        <select id="citySelect" onChange={handleCityChange} value={selectedCity}>
          <option value="">Select City</option>
          {locationData.map(({ city }) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      {weatherData && (
        <div className="weather-data-container"> 
          <h2>Weather Data:</h2>
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

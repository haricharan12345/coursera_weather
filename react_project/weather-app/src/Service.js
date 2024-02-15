import axios from "axios"
const lat = [52.367, 39.933, 56.134]

const long = [4.904, 32.859, 12.945]

const URL = "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0";

const getWeatherdata =async () => {
    const res = await axios.get(URL)
    const weatherData = await res.data;
    // console.log(weatherData.dataseries);

    const { dataseries ,product} = weatherData;

    const { cloudcover,timepoint } = dataseries[0];
    
    return { cloudcover,timepoint,product};
}
    
export { getWeatherdata}

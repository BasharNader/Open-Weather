const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "944a112563f25dc3e58afd75a3dca869";

export const getCityWeather = async (cityName) => {
  try {
    const response = await fetch(`${BASE_URL}q=${cityName}&appid=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch(e) {
    throw e;
  }
};

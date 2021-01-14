import "./App.css";
import City from "./components/City";
import Form from "./components/Form";
import Stats from "./components/Stats";
import MainStat from "./components/MainStat";
import { useEffect, useState } from "react";
import { getCityWeather } from "./http";

function App() {
  const [state, setState] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");

  const [stats, setStats] = useState([
    { title: "title1", value: "value1" },
    { title: "title2", value: "value1" },
    { title: "title3", value: "value1" },
    { title: "title4", value: "value1" },
  ]);

  useEffect(() => {
    getCityWeather("Rasht").then((data) => {
      setCity(data.name);
      setState(data.weather[0].main);
      setDesc(data.weather[0].description);
      setStats([
        { title: "Temperature", value: data.main.temp },
        { title: "Feels Like", value: data.main.feels_like },
        { title: "Pressure", value: data.main.pressure },
        { title: "Icon", value: data.weather[0].icon },
      ]);
    });
  }, []);

  return (
    <div className="App">
      <h2>Open Weather App</h2>
      <Form />
      <MainStat state={state} desc={desc} />
      <City name={city} />
      <Stats stats={stats} />
    </div>
  );
}

export default App;

import "./App.css";
import City from "./components/City";
import Form from "./components/Form";
import Stats from "./components/Stats";
import MainStat from "./components/MainStat";
import { useState } from "react";

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

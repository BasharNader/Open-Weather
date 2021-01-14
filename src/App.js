import './App.css';
import City from './components/City';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h2>Open Weather App</h2>
      <Form />
      <City name="Rasht" />
    </div>
  );
}

export default App;

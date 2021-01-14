import './App.css';
import City from './components/City';
import Form from './components/Form';
import Stats from './components/Stats';

function App() {
  const stats = [
    { title: 'title1', value: 'value1' },
    { title: 'title2', value: 'value1' },
    { title: 'title3', value: 'value1' },
    { title: 'title4', value: 'value1' }
  ];
  return (
    <div className="App">
      <h2>Open Weather App</h2>
      <Form />
      <City name="Rasht" />
      <Stats stats={stats} />
    </div>
  );
}

export default App;

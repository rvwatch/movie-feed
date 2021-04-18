import './App.css';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>Movie Feed</h1>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Drama" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;

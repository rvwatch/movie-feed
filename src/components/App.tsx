import { Provider } from "react-redux";
import { store } from "../state";
import './App.css';
import Nav from './Nav';
import Row from './Row';
import requests from '../request';


function App() {
  const backgroundPoster = { backgroundImage: 'https://image.tmdb.org/t/p/original/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg' };
  return (
    <Provider store={store} >
      <div id="App" style={backgroundPoster}>
        <Nav />
        <Row title="Featured" url={requests.fetchTrending} />
        <Row title="Action" url={requests.fetchActionMovies} />
      </div>
    </Provider>
  );
}

export default App;

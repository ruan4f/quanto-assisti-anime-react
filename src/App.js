import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import SearchAnimes from './views/search-animes'
import ListAnimes from './views/list-my-animes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Pesquisar animes</Link></li>
            <li><Link to="/listanimes">Meus animes</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={SearchAnimes} />
          <Route path="/listanimes" component={ListAnimes} />
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={ MovieList } />
        </div>
      </Router>
    );
  }
}

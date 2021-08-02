//  import { render } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  /*  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    console.log('Componente Montado');
    const response = await fetch('http...');
    const countries = await response.json();
    this.setState({
      countries,
    });
  }
*/
  render() {
    return (
      <Router>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="/*" component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

//  <Route exact path="/" render={ (props) => <MovieList { ...props } countries={ countries } /> } />

export default App;

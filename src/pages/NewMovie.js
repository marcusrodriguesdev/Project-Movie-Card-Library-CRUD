import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect === true) return <Redirect to="/" />;
    return (
      <div className="movie-new">
        <h3>Adicionar um novo filme</h3>
        <section data-testid="new-movie">
          <MovieForm onSubmit={ this.handleSubmit } />
        </section>
      </div>
    );
  }
}

export default NewMovie;

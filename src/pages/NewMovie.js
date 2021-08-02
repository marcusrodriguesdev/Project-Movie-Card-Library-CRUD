import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (newMovie) => {
    const callback = await movieAPI.createMovie(newMovie);
    this.setState({
      status: callback,
    });
  }

  render() {
    const { status } = this.state;
    if (status === 'OK') return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;

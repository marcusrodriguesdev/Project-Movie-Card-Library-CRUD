import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.state = {
      status: 'loading',
      id,
      shouldRedirect: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.carregafilmes();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: '/' });
  }

  async carregafilmes() {
    const { id } = this.state;
    console.log(id);
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      status: false,
    });
    console.log(movie);
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === '/') {
      // Redirect
      return <Redirect to={ shouldRedirect } />;
    }

    if (status === 'loading') {
      // render Loading
      return <p>Carregando</p>;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {

  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;

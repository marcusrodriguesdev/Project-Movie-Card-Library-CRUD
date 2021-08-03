import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

import Header from './Header';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      loading: false,
      shouldRedirect: false,
      movie: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({
      movie: updatedMovie,
      shouldRedirect: true,
    });
  }

  fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true });
    getMovie(id)
      .then((data) => {
        this.setState({
          movie: data,
          loading: false,
        });
      });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (loading) {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <Header />
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        <Link to="/" className="back-button">Voltar</Link>
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;

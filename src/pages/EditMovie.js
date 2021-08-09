import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  async handleSubmit(updatedMovie) {
    const { movie } = this.state;
    if (JSON.stringify(updatedMovie) !== JSON.stringify(movie)) {
      this.setState({
        shouldRedirect: true,
      });
      await movieAPI.updateMovie(updatedMovie);
    }
  }

  async requestMovie() {
    const { match: { params: { id } } } = this.props;
    const movieData = await movieAPI.getMovie(id);

    this.setState({
      movie: movieData,
      loading: false,
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (loading) {
      return (<Loading />);
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
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;

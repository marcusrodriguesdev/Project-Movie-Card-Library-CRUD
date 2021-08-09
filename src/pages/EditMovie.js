import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      shouldRedirect: false,
      movie: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: false }, () => {
      movieAPI.updateMovie(updatedMovie);
      this.setState({ shouldRedirect: true });
    });
  }

  async getMovie() {
    const { props } = this.props;
    const { id } = props.match.params;
    this.setState({ isLoading: true }, async () => {
      await movieAPI.getMovie(id)
        .then((response) => {
          this.setState({ movie: response }, () => {
            this.setState({ isLoading: false });
          });
        });
    });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  props: PropTypes.arrayOf({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
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
    this.fetchAPI();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  fetchAPI = () => {
    const { match } = this.props;
    this.setState({ loading: true },
      async () => {
        const data = await movieAPI.getMovie(match.params.id);
        this.setState({
          movie: data,
          loading: false,
        });
      });
  }

  render() {
    const { loading, movie, shouldRedirect } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (loading === true) {
      // render Loading
      return <Loading />;
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
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;

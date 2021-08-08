import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.pickMovie = this.pickMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.pickMovie();
  }

  componentDidUpdate() {
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  redirection() {
  }

  async pickMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: false }, await movieAPI.getMovie(id)
      .then((data) => this.setState({
        loading: true,
        movie: data,
      })));
  }

  render() {
    const { status, shouldRedirect, movie, loading } = this.state;
    // esse if foi baseado no if desse repositorio do colega https://github.com/tryber/sd-013-b-project-movie-card-library-crud/pull/90/files#submit-review
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
    }
    return (
      <div data-testid="edit-movie">

        {loading ? <Loading /> : <MovieForm
          movie={ movie }
          onSubmit={ this.handleSubmit }
        />}

      </div>
    );
  }
}

export default EditMovie;
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

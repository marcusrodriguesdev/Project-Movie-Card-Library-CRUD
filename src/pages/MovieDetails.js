import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieDetailsInfo from '../components/MovieDetailsInfo';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };

    this.pickMovie = this.pickMovie.bind(this);
  }

  componentDidMount() {
    this.pickMovie();
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
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    return (
      <div>
        {
          loading ? <Loading /> : <MovieDetailsInfo movie={ movie } />
        }
      </div>

    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    this.movies();
  }

  movies() {
    const {
      match: { params: { id } },
    } = this.props;
    this.setState({ loading: true }, async () => {
      const get = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: get,
      });
    });
  }

  render() {
    // Change the condition to check the state
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    // if (true) return <Loading />;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>
          {`Title: ${title}`}
        </p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>

        <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
        <Link to="/"> VOLTAR </Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }> DELETAR </Link>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default MovieDetails;

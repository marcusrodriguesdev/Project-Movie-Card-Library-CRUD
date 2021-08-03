import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import { deleteMovie, getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      movie: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleDelete() {
    const { movie } = this.state;
    const { id } = movie;
    await deleteMovie(id);
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
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (loading) {
      return <Loading />;
    }
    return (
      <section className="movie-details">
          <Header />
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } width="90%" height="200px" className="details-image" />
          <p className="details-text">{ `Title: ${title}` }</p>
          <p className="details-text">{ `Subtitle: ${subtitle}` }</p>
          <p className="details-text">{ `Storyline: ${storyline}` }</p>
          <p className="details-text">{ `Genre: ${genre}` }</p>
          <p className="details-text">{ `Rating: ${rating}` }</p>
        </div>
        <div className="detail-links">
          <Link to="/" className="details-link">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` } className="details-link">EDITAR</Link>
          <Link to="/" onClick={ this.handleDelete } className="details-link">DELETAR</Link>
        </div>
      </section>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;

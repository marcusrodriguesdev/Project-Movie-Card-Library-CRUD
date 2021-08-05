import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
    };

    this.pegaFilme = this.pegaFilme.bind(this);
  }

  componentDidMount() {
    this.pegaFilme();
  }

  async pegaFilme() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const umFilme = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: umFilme,
        });
      },
    );
  }

  render() {
    // const { id } = this.props.match.params;
    const { match: { params: { id } } } = this.props;
    const {
      movie: { title, storyline, imagePath, genre, rating, subtitle },
      loading } = this.state;
    return (
      <div data-testid="movie-details">
        { loading ? <Loading />
          : (
            <>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to="/">VOLTAR</Link>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            </>
          )}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
  params: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

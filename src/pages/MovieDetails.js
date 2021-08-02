import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      loading: true,
      id,
      movieFind: [],
    };
  }

  componentDidMount() {
    this.fetchApiDetails();
  }

  async fetchApiDetails() {
    const { id } = this.state;

    this.setState({ loading: true },
      async () => {
        const responseOfApi = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movieFind: responseOfApi,
        });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { id, loading, movieFind } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movieFind;
    return (
      <div data-testid="movie-details">
        {loading === true ? <Loading />
          : (
            <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{`Title: ${title}`}</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          )}
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
};
export default MovieDetails;

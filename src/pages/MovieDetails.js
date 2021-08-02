import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const required = await movieAPI.getMovie();
    this.setState({
      movies: required,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movies, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;

    const loadingElement = <Loading />;
    return (
      <div>
        { loading ? loadingElement
          : (
            <div data-testid="movie-details">
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <h4>{ `Title: ${title}`}</h4>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <Link to="/movies/:id/edit">EDITAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          )}
      </div>
    );
  }
}

export default MovieDetails;

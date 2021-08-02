import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import movieAPI, { getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading:false,
    }
  }
  
  fetchMovie() {
    const id = this.props.match.params.id;
    this.setState({ loading: true });
    getMovie(id)
      .then((data) => {
        this.setState({
          movie: data,
          loading: false,
        });
      });
  }

  componentDidMount() {
    this.fetchMovie();
  }
  
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    const { loading } = this.state
    if (loading) {
      return <Loading />
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

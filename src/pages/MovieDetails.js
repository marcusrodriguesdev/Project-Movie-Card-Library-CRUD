import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../components/style/card.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
    };
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const getMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: getMovie,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    const {
      movie: { title, storyline, imagePath, genre, rating, subtitle },
      loading,
    } = this.state;

    if (loading) return <Loading />;
    return (
      <div className="main-div" data-testid="movie-details">
        <div className="movie-title">
          <h1 className="title-movie">{ title }</h1>
        </div>
        <div className="div-image">
          <img className="main-image" alt="Movie Cover" src={ `../${imagePath}` } />
        </div>
        <div className="div-sub-title">
          <p>{ `Subtitle: ${subtitle}` }</p>
        </div>
        <div className="div-story">
          <p>{ `Storyline: ${storyline}` }</p>
        </div>
        <div className="div-genre">
          <p>{ `Genre: ${genre}` }</p>
        </div>
        <div className="div-Rating">
          <p>{ `Rating: ${rating}` }</p>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  
};

export default MovieDetails;

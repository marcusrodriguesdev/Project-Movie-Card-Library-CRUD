import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import {Link, Route} from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        movies: [],
        loading:true
      };
    }   
    componentDidMount(){
      movieAPI.getMovies
      this.setState({
        movies:[...movies],
        loading:false
      })
    }
    
    
    render() {
      const { movies, loading } = this.state;
      // Render Loading here if the request is still happening
      
      
      return (
        <div data-testid="movie-list">
        {loading ? <Loading className="loading" />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;

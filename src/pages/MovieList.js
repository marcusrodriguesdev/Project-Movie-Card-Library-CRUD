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
     this.captura();
    }
  captura() {
    this.setState({ loading: true }, async () => {
      try {
        const get = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: get,
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
    render() {
      const { movies, loading } = this.state;
      // Render Loading here if the request is still happening
      
      if (loading) return <Loading />;
      return (
        <div data-testid="movie-list">
        
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;

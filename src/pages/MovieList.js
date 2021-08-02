import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.callMovies();
  }

   callMovies = async () => {
     const { getMovies } = movieAPI;
     this.setState({
       loading: true,
     });
     const moviesList = await getMovies()
       .then((result) => result);
     this.setState({
       movies: [...moviesList],
       loading: false,
     });
   }

   render() {
     const { movies, loading } = this.state;
     return (
       <div data-testid="movie-list">
         {
           loading
             ? <Loading />
             : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
         }
         <Link to="/movies/new">ADICIONAR CARTÃO</Link>
       </div>
     );
   }
}

export default MovieList;

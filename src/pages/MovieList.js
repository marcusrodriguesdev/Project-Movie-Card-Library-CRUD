import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

// Faça uma requisição para buscar e mostrar a lista de filmes
// quando MovieList for montado
// Para buscar a lista, você deve utilizar a função getMovies
// importada do módulo movieAPI em MovieList. Essa função
// retorna uma promise. A requisição deve ser feita no momento
// em que o MovieList for montado no DOM. Enquanto a requisição
// estiver em curso, MovieList deve renderizar o componente
// Loading, como ilustrado na imagem a seguir.

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: [],
    };

    this.pegaFilmes = this.pegaFilmes.bind(this);
  }

  componentDidMount() {
    this.pegaFilmes();
  }

  async pegaFilmes() {
    this.setState(
      { loading: true },
      async () => {
        const todosFilmes = await movieAPI.getMovies();
        this.setState({
          movies: [...todosFilmes],
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

// Faça uma requisição para buscar o filme que deverá
// ser renderizado dentro de Movie Details
// MovieDetails se comporta de forma muito semelhante
// ao MovieList. Ao ser montado,
// deve fazer uma requisição utilizando a função
// getMovie, se atente para o nome da
// função que é muito semelhante ao de outra função
// que já utilizamos, a getMovies,
// do módulo movieAPI, passando o id do filme.
// O componente Loading deve ser
// renderizado enquanto a requisição estiver em
// curso. Após terminar
// deve-se renderizar um card com mais detalhes
// sobre o filme, contendo:

// Uma <img> com a imagem do filme e alt='Movie Cover';
// Título;
// Subtítulo;
// Sinopse;
// Gênero;
// Avaliação;
// um link com o texto "EDITAR"
// apontando para a rota /movies/:id/edit e
// um link apontando para a rota raiz (/) com o texto "VOLTAR".

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
    };

    this.pegaFilme = this.pegaFilme.bind(this);
  }
  // Change the condition to check the state
  // if (true) return <Loading />;

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
    const { id } = this.props.match.params;
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

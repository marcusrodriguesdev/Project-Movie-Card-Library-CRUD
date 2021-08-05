import React from 'react';
import { Link } from 'react-router-dom';

// Insira um link para a página de detalhes 
// de um filme dentro de MovieCard
// Todos os MovieCards devem possuir em seu 
// conteúdo, pelo menos,

//  o título,
//  a sinopse
// // e um link com o texto "VER DETALHES"

// que aponta para a rota movies/:id, onde
// :id é o id do filme. Esta rota exibirá
// informações detalhadas de um filme.
// O que será verificado:
// Será validado se cada MovieCard exibe 
// pelo menos o título e a sinopse de seu respectivo filme
// Será validado se cada MovieCard contém 
// um link com o texto VER DETALHES que 
// redireciona para a página de detalhes do filme

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="teste" />
        <p>
          { title }
        </p>
        <h1>{ storyline }</h1>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      exibir: 'carregando',
    };
  }
async componentDidMount() {
  const { match: { params: id } } = this.props;
  const respons = await movieAPI.getMovie(parseInt(id.id,10))
    this.setState({
      movie: respons,
      exibir: 'carregado',
  })
 
}
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
      const { movie: { id,title, storyline, imagePath, genre, rating, subtitle } } = this.state;
      const {exibir} = this.state;
      if (exibir === 'carregando') {
        return <Loading/>;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`Título: ${title}`}</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="link">
        <Link to={`/movies/${id}/edit `}>EDITAR</Link>
        <Link to='/'>VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

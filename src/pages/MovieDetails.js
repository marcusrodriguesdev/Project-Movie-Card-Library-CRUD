import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.carregafilmes = this.carregafilmes.bind(this);
    this.deletar = this.deletar.bind(this);

    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.state = {
      movie: {},
      loading: true,
      id,
    };
  }

  componentDidMount() {
    this.carregafilmes();
  }

  async carregafilmes() {
    const { id } = this.state;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  async deletar() {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading, id } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <main>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <Link to={ `${id}/edit` }> EDITAR </Link>
        <Link to="/"> VOLTAR </Link>
        <Link to="/" onClick={ this.deletar }>DELETAR</Link>
        {/* <button type="button" onClick={ this.deletar }>DELETAR</button> */}
        <p>{loading ? <Loading /> : '' }</p>
      </main>
    );
  }
}

MovieDetails.propTypes = {

  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default withRouter(MovieDetails);

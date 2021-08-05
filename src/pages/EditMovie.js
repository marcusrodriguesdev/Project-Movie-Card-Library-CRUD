import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Redirect } from 'react-router-dom';

// Ao ser montada, a página de edição do filme 
// deve fazer uma requisição pra buscar o filme
// que será editado
// e deve, 
// ao ter seu formulário 
// submetido, atualizar o filme e 
// Será validado se EditMovie exibe o texto 
// "Carregando..." enquanto estiver fazendo 
// a requisição
// Será validado se EditMovie contém um formulário
// preenchido com o título, subtítulo, sinopse,
// caminho da imagem e gênero do filme selecionado
// Será validado se, ao clicar no botão de submit, 
// uma requisição para API é feita e o filme 
// selecionado é atualizado. Após a conclusão
// da atualização a pessoa usuária deve ser 
// redirecionada para a página inicial

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,

    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.pegaFilmeParaEditar = this.pegaFilmeParaEditar.bind(this);
  }

  componentDidMount() {
    this.pegaFilmeParaEditar();
  }

  handleSubmit(updatedMovie) { //tem a com o form 
    // console.log(updatedMovie);
    movieAPI.updateMovie(updatedMovie); //api
    this.setState({
      shouldRedirect: true,
    });
  }

  async pegaFilmeParaEditar() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const filmeParaEditar = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: filmeParaEditar,
        });
      })
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;

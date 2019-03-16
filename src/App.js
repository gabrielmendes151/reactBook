import React, { Component, Fragment } from 'react';
import GlobalStyle from './styles/global';
import Header from './pages/Header/Header';
import Post, { Post1, Post2, Post3, Post4 } from './pages/Post/Post'
import avatarGabriel from './assets/imagens/gabriel.jpg';
import avatarAgostinho from './assets/imagens/agostinho.jpg';
import avatarBeicola from './assets/imagens/beicola.jpg';
import avatarMendonca from './assets/imagens/mendonca.jpg';


class App extends Component {
  state = {
    posts: [
      { img: avatarGabriel, nome: 'Gabriel Gonçalves Mendes', tempoDoPost: 3, postagem: Post1 },
      { img: avatarAgostinho, nome: 'Agostinho Carrara', tempoDoPost: 1, postagem: Post2 },
      { img: avatarBeicola, nome: 'Beiçola José', tempoDoPost: 5, postagem: Post3 },
      { img: avatarMendonca, nome: 'Mendonça Fagundes', tempoDoPost: 10, postagem: Post4 },
    ],
  };

  render() {
    return (
      <Fragment>
        <div>
          <GlobalStyle />
          <Header />
          <Post posts={this.state.posts} />
        </div>
      </Fragment>
    );
  }
}

export default App;

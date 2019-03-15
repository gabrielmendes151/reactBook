import React, { Component, Fragment } from 'react';
import GlobalStyle from './styles/global';
import Header from './pages/Header/Header';
import HeaderPost from './pages/HeaderPost/HeaderPost';
import avatarGabriel from './assets/imagens/gabriel.jpg';
import avatarAgostinho from './assets/imagens/agostinho.jpg';
import avatarBeicola from './assets/imagens/beicola.jpg';
import avatarMendonca from './assets/imagens/mendonca.jpg';

class App extends Component {
  state = {
    posts: [
      { img: avatarGabriel, nome: 'gabriel' },
      { img: avatarAgostinho, nome: 'Agostinho Carrara' },
      { img: avatarBeicola, nome: 'Beiçola' },
      { img: avatarMendonca, nome: 'Mendonça' },
    ],
  };

  render() {
    return (
      <Fragment>
        <div>
          <GlobalStyle />
          <Header />
          <HeaderPost posts={this.state.posts} />
        </div>
      </Fragment>
    );
  }
}

export default App;

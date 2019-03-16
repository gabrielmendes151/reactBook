import { Container, PostHeader } from './Styled';
import React, { Component, Fragment } from 'react';
import Header from './Header'

class HeaderPost extends Component {
  render() {
    const { img, nome, tempoDoPost, postagem } = this.props;
    return (
      <Fragment>
        <Container>
          <PostHeader>
            <Header img={img} nome={nome} tempoDoPost={tempoDoPost} postagem={postagem} />
          </PostHeader>
        </Container>
      </Fragment>
    );
  }
}

export default HeaderPost;

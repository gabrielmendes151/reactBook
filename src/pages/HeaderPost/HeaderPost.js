import { Container, Post, Header } from './Styled';
import React, { Component, Fragment } from 'react';

class HeaderPost extends Component {
  render() {
    const { posts } = this.props;

    return (
      <Fragment>
        {posts.map(post => {
          return (
            <Container>
              <Post>
                <Header>
                  <img src={post.img} alt={post.nome} />
                </Header>
              </Post>
            </Container>
          );
        })}
      </Fragment>
    );
  }
}

export default HeaderPost;

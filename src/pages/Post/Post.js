import React, { Component, Fragment } from 'react';
import HeaderPost from '../HeaderPost/HeaderPost';

export const Post1 = `My name is Gabriel, i twenty three years old, i finished my university in november of 2016.
I am working with programtion almost one year and eight months and studying react web almost two months.
Bought the course for became expert in react and get one job that earns me more! I am waiting for module four
of react web, however still not did the challangers, i am in the one challange.Css is a throuble!`

export const Post2 = `My name is Agostinho Carrara i thirty three years old , i am a taxi driver, i drive
by the streets of Rio de Janeiro , i have been working in this almost fifteen years , it is my happiness `

export const Post3 = `My name is  Beiçola  i a'm thirty six years old , i am the owner of restaurant where sell
pastry , i working in this for twenty years, no is my passion but bring me a kind happiness, because i
have so much contact with consumers they become my friends`

export const Post4 = `My name is Mendonça i have fifty four years old , i have my own bussines ,so
i'm the manager of this , i like of enjoy the life , for me ,enjoy the life is get out , drink ,
meet nice womans and etc, i drink a lot , but i'm one kind and responsible guy `

class Post extends Component {
    render() {
        const { posts } = this.props;
        return (
            <Fragment>
                {
                    posts.map(post => {
                        return (
                            <Fragment>
                                <HeaderPost img={post.img} nome={post.nome} tempoDoPost={post.tempoDoPost} postagem={post.postagem} />
                            </Fragment>
                        );
                    })
                }

            </Fragment>);
    }
}
export default Post;
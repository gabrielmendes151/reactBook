import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        const { img, nome, tempoDoPost, postagem } = this.props;
        return (
            <header>
                <div>
                    <img src={img} alt={nome} />
                    <small className="smallNome">{nome}</small>
                    <br />
                    <small className="smallTempo">Ha {tempoDoPost} min</small>
                    <br /><br /><br />
                    <p>{postagem}</p>
                </div>
            </header>
        );
    }
}

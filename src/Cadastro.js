import React, {Component} from 'react';
import './Cadastro.css';
import Header from './componentes/Header/index.js'
import TituloNovoPost from './componentes/NovoPost/TituloNovoPost/index.js'
import ConteudoNovoPost from './componentes/NovoPost/ConteudoNovoPost';

class Cadastro extends Component {

  render() {

    return (
        <div className="Cadastro">
          <Header></Header>
          <TituloNovoPost titulo="NOVA PUBLICAÇÃO"></TituloNovoPost>
          <ConteudoNovoPost></ConteudoNovoPost>
       </div>
    );
  }
}

export default Cadastro;

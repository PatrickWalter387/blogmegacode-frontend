import React, {Component} from 'react';
import './Cadastro.css';
import Header from './componentes/Header/index.js'
import TituloNovoPost from './componentes/NovoPost/TituloNovoPost/index.js'
import EditarPost from './componentes/EditarPost/index'

class Cadastro extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      res: [],
      pag: 1
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.callApi = this.callApi.bind(this);
  }
  
  //Armazena a postagem desejada para a edicao
  componentDidMount() {
    this.callApi()
    .then(resp => this.setState({
      res: resp
    
    }))
    .catch(err => console.log(err));
  }

  //Seleciona a postagem desejada para a edicao
  callApi = async () => {
    console.log("AAA" + this.state.pag);
    const response = await fetch(`${process.env.REACT_APP_IP_SERVER}/api/Postagens?page=${this.state.pag}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    
    if(this.state.res.length === 0){
      return "";
    }

    return (
        <div className="Cadastro">
          <Header></Header>
          <TituloNovoPost titulo="EDITAR PUBLICAÇÃO"></TituloNovoPost>
          <EditarPost titulo={this.props.location.param1} 
          conteudo={this.props.location.param2} 
          id={this.props.match.params.catId}></EditarPost>
       </div>
        

    );
  }
}

export default Cadastro;

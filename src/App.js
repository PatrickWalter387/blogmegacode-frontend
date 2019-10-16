import React, {Component} from 'react';
import './App.css';
import Header from './componentes/Header/index.js'
import Titulo from './componentes/Titulo/index.js'
import PublicacoesArea from './componentes/PublicacoesArea/index.js'
import Menu from './componentes/Menu/index.js'

class App extends Component {
  /
  constructor(props){
    super(props);

    this.state = {
      res: [],
      pag: 1,
      resRecentes: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.callApi = this.callApi.bind(this);
  }
  

  componentDidMount() {

    //Armazena a Consulta Completa Posts
    this.callApi()
    .then(resp => this.setState({
      res: resp
    
    }))
    .catch(err => console.log(err));


    //Armazena Consulta 5 Posts mais recentes
    this.callApi2()
    .then(resp => this.setState({
      resRecentes: resp
    
    }))
    .catch(err => console.log(err));
  }


  //Consulta Posts Completa
  callApi = async () => {
    console.log("AAA" + this.state.pag);
    const response = await fetch(`${process.env.REACT_APP_IP_SERVER}/api/Postagens?page=${this.state.pag}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  //Consulta 5 Posts mais recentes
  callApi2 = async () => {
    console.log("AAA" + this.state.pag);
    const response = await fetch(`${process.env.REACT_APP_IP_SERVER}/api/PostagensRecentes`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  //Define a pagina atual
  setPag = async (pag) => {
    await this.setState({pag: pag});
    
    this.componentDidMount();
  }

  //Avanca a Pagina
  avancarPagina = async () => {
    await this.setState({pag: this.state.pag+1});

    this.componentDidMount();
  }

  //Retrocede a Pagina
  retornarPagina = async () => {
    await this.setState({pag: this.state.pag-1});

    this.componentDidMount();
  }

  render() {
    
    if(this.state.res.length === 0){
      return "";
    }

    console.log(this.state.res);

    return (
        <div className="App">
          <div className="cabecalho">
            <Header></Header>
          </div>
          <Titulo posts={this.state.resRecentes}></Titulo>
          <div className="lado-lado">
            <div className="area1">
              <PublicacoesArea post={this.state.res}></PublicacoesArea>


            <div className="botoesPag">

              <button className="btnPag" disabled={this.state.pag == 1} 
              onClick={() => this.retornarPagina()}><span className="seta">&lt;</span></button>
                
              <button className="btnPag" disabled={this.state.pag == 1} 
              onClick={() => this.setPag(1)}>1</button>

              <button className="btnPag" disabled={this.state.pag == 2 || this.state.res.pages<2} 
              onClick={() => this.setPag(2)}>2</button>

              <button className="btnPag" disabled={this.state.pag == 3 || this.state.res.pages<3} 
              onClick={() => this.setPag(3)}>3</button>

              <button className="btnPag" disabled={this.state.pag == 4 || this.state.res.pages<4}  
              onClick={() => this.setPag(4)}>4</button>

              <button className="btnPag" disabled={this.state.pag == 5 || this.state.res.pages<5} 
              onClick={() => this.setPag(5)}>5</button>

              <button className="btnPag" disabled={this.state.pag == this.state.res.pages}
              onClick={() => this.avancarPagina()}><span className="seta">&gt;</span></button>

            </div>


              <p className="App-intro">{}</p>
            </div>
            <div className="area2">
              <Menu></Menu>
            </div>
          </div>
          
       </div>
        

    );
  }
}

export default App;

import React, {Component} from 'react';

class ConteudoMenu extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      resRecentes: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.callApi = this.callApi.bind(this);
  }
  

  componentDidMount() {

    //Registra a Consulta dos 5 post mais recentes
    this.callApi()
    .then(resp => this.setState({
      resRecentes: resp
    
    }))
    .catch(err => console.log(err));
  }

  //Consulta 5 posts mais recentes
  callApi = async () => {
    console.log("AAA" + this.state.pag);
    const response = await fetch(`${process.env.REACT_APP_IP_SERVER}/api/PostagensRecentes`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  //Retorna os posts mais recentes para o html
  setTopico = (num) => {
      if(num < this.state.resRecentes.length){
          return this.state.resRecentes[num].titulo;
      }
      else{
          return " ";
      }
  }

  render() {
    
    if(this.state.resRecentes.length === 0){
      return "";
    }

    return (
        <div className="ConteudoMenu">
          <ul>
              <li><p>{this.setTopico(0)}</p></li>
              <li><p>{this.setTopico(1)}</p></li>
              <li><p>{this.setTopico(2)}</p></li>
              <li><p>{this.setTopico(3)}</p></li>
              <li><p>{this.setTopico(4)}</p></li>
          </ul>
          
       </div>
        

    );
  }
}

export default ConteudoMenu;

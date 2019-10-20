import React, {Component} from 'react'
import './style.css'
import Moment from 'moment'
import BotoesEditarExcluir from './BotoesEditarExcluir';


export default class Publicacoes extends Component{

    constructor(props){
        super(props);

        this.mostraBotoes = this.mostraBotoes.bind(this);
        this.esconderBotoes = this.esconderBotoes.bind(this);
    }
    
    state = {
        visualizacaoBotoes: false    
    }

    //Mostra os Botoes
    mostraBotoes = () =>{
        console.log("OVO CHORA");
        this.setState({
            visualizacaoBotoes: true
        });
    }

    //Esconde os Botes
    esconderBotoes = () =>{
        console.log("OVO CHORA2");
        this.setState({
            visualizacaoBotoes: false
        });
    }



    render(){

        return(
            <div className="post" onMouseEnter={this.mostraBotoes} onMouseLeave={this.esconderBotoes}>
                <div className="barra">
                    <h3>{this.props.post.titulo}</h3> 
                    {this.state.visualizacaoBotoes && <BotoesEditarExcluir post={this.props.post}/>}
                </div>

                <div className="conteudo">
                    <div className="data">
                        <p>{Moment(this.props.post.data).format("DD/MM/YYYY hh:mm")}</p>
                    </div>
                        
                    <div className="descricao">
                            <p>{this.props.post.conteudo}</p>
                    </div>
                </div>
            </div>
        );
    }
}
import React, {Component} from 'react'
import './style.css'
import Moment from 'moment'
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom'





export default class Publicacoes extends Component{

    constructor(props){
        super(props);

        this.SetDeletar = this.SetDeletar.bind(this);
    }

    //Acessa a rota para o deletar da publicacao selecionada
    async SetDeletar(){
        await fetch(`${process.env.REACT_APP_IP_SERVER}/api/Deletar/${this.props.post._id}`);
    
    }

    //Mostra os Botoes
    mostraBotoes(){
        const post = document.getElementsByClassName("post");
        post[0].syle.display = "flex";
    }

    //Esconde os Botes
    esconderBotoes(){
        const post = document.getElementsByClassName("post");
        post[0].style.display = "none";
    }

    componentDidMount(){
        this.esconderBotoes;
    }

    render(){

        //Cria o caminho para o editar da publicacao selecionada
        const newTo = { 
            pathname: "/Editar/" + this.props.post._id,
            param1: this.props.post.titulo,
            param2: this.props.post.conteudo
            
          };

        return(
            <div className="post" onMouseEnter={this.mostraBotoes} onMouseOut={this.esconderBotoes}>
                <div className="barra">
                    <h3>{this.props.post.titulo}</h3> 
                <div className="apagarEditar">
                    <form action={`${process.env.REACT_APP_IP_SERVER}/api/Refresh`} method="post"> 
                
                
                        <button type="submit" className="btn" onClick={this.SetDeletar}>
                            <ClearIcon></ClearIcon>
                        </button>
                    </form>
                    <Link to={newTo} className="btnEditar"><CreateIcon/></Link>
                
                </div>

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
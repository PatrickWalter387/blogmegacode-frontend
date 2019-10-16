import React, {Component} from 'react'
import './style.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class ConteudoNovoPost extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            novoTitulo: "",
            Titulo: "",
            Conteudo: "",
            novoConteudo: ""
        }

        this.setTitulo = this.setTitulo.bind(this);
        this.setValorFinal = this.setValorFinal.bind(this);
        this.setConteudo = this.setConteudo.bind(this);
    }

    setTitulo(e) {
        this.setState({novoTitulo : e.target.value});
     }
 
     setConteudo(e) {
         this.setState({novoConteudo : e.target.value});
     }
 
     setValorFinal(e) {
         this.setState({Titulo : this.state.novoTitulo, Conteudo: this.state.novoConteudo});
  
         e.preventDefault();
     }

    render(){
        return(
                <div className="conteudoNovoPost">
                    
                    <form action={`${process.env.REACT_APP_IP_SERVER}/api/Postagens`} method="POST">
                        <label>Titulo</label><br/>
                        <input type="text" id="titulo" name="titulo"></input><br/>
                        <label>Conteudo</label><br/>
                        <textarea type="text" rows="10" id="conteudo" name="conteudo"></textarea><br/>
                        <div className="botoes">
                            <input type="submit" className="btn1" value="SALVAR"></input><br/>
                            <Link to="/">
                                <button className="btn2">
                                    CANCELAR
                                </button>
                            </Link>
                            
                        </div>
                    </form>
                    
                </div> 
        );
    }
}
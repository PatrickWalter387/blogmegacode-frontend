import React, {Component} from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export default class EditarPost extends Component{

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

    //Seta o conteudo inicial do post que deseja editar nos componentes
    componentDidMount() {
            document.getElementById('titulo').value = this.props.titulo;
            document.getElementById('conteudo').value = this.props.conteudo;    
            this.setState({link : `${process.env.REACT_APP_IP_SERVER}/api/PostagensAtualizar/` + this.props.id}); 
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
                    
                    <form action={this.state.link} method="post">
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
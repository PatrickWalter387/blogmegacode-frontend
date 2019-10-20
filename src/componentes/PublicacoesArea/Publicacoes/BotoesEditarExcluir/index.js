import React, {Component} from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom'

export default class BotoesEditarExcluir extends Component{

    constructor(props){
        super(props);
        
        this.SetDeletar = this.SetDeletar.bind(this);
    }


    //Acessa a rota para o deletar da publicacao selecionada
    async SetDeletar(){
        await fetch(`${process.env.REACT_APP_IP_SERVER}/api/Deletar/${this.props.post._id}`);
    
    }

    render(){

        //Cria o caminho para o editar da publicacao selecionada
        const newTo = { 
            pathname: "/Editar/" + this.props.post._id,
            param1: this.props.post.titulo,
            param2: this.props.post.conteudo
            
          };

        return(
            <div className="apagarEditar"> 
                            <form action={`${process.env.REACT_APP_IP_SERVER}/api/Refresh`} method="post"> 
                                <button type="submit" className="btn" onClick={this.SetDeletar}>
                                    <ClearIcon></ClearIcon>
                                </button>
                            </form>
                            <Link to={newTo} className="btnEditar"><CreateIcon/></Link>
                        </div>
        );
    }
}
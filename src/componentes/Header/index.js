import React, {Component} from 'react'
import './style.css'
import Botao from './Botao/index.js'



export default class Header extends Component{
    render(){
        return(
            <header id="cabecalho">
                <div className="barra">
                        <Botao></Botao>
                    <p>USUÁRIO LOGADO</p>
                </div> 
                
            </header>
        );
    }
}
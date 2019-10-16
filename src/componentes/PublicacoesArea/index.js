import React, {Component} from 'react'
import './style.css'
import Publicacoes from './Publicacoes/index.js'

export default class PublicacoesArea extends Component{
    render(){
        return(
            <div className="publicacoes">
                

                {this.props.post.docs.map((postagem, index) =>{
                    return <Publicacoes key={index} post={postagem}></Publicacoes>
                }) }
            </div>
        );
    }
}
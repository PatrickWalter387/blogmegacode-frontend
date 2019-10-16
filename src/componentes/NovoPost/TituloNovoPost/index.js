import React, {Component} from 'react'
import './style.css'

export default class TituloNovoPost extends Component{
    render(){
        return(
                <div className="tituloNovoPost">
                    <h2>{this.props.titulo}</h2>
                </div> 

                
        );
    }
}
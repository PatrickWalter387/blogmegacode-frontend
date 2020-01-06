import React, {Component} from 'react'
import './style.css'
import MenuLateral from './MenuLateral/index'



export default class Titulo extends Component{
    render(){
        return(
                <div className="titulo">
                    <MenuLateral></MenuLateral>
                    <div className="t2">
                        <h1>BLOG REACT</h1>
                    </div>
                </div> 

                
        );
    }
}

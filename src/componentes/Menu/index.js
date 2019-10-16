import React, {Component} from 'react'
import './style.css'
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MyComponent from './Responsivo/index';



export default class Menu extends Component{

    render(){
        return(
            <div className="lista">
                <MyComponent></MyComponent>
                
            </div>
        );
    }
}
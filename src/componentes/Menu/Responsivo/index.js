import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ConteudoMenu from './ConteudoMenu/index';

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm')); //Analise do tamanho da tela

  //Define o menu ou nao de forma responsiva
 if(matches == true){
    return (
                <div className="div1">
                <ConteudoMenu></ConteudoMenu>
                </div>
    );
 }
 else{
     return "";
 }

  
}

export default MyComponent;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import './style.css'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 230
  },
  button2: {
    margin: theme.spacing(1),
    width: 0
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Hidden xsDown>
      
      <Link to="/Cadastro">
        <Button variant="outlined" color="inherit" display="inline" className={classes.button}>
          <span className="conteudoBotao">NOVA PUBLICAÇÃO</span>
        </Button>
      </Link>
      
      </Hidden>

      <Hidden smUp>

      <Link to="/Cadastro" text="Cadastrar"> 
        <Button variant="outlined" color="inherit" display="inline" size="small" className={classes.button2}>
          <AddIcon fontSize="large" className="conteudoBotao"></AddIcon>
        </Button>
      </Link>
      </Hidden>
    </div>
    
  );
}
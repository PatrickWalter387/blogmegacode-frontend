import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



const titulos = [];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

//Busca os 5 mais recentes
const callApi = async () => {
    const response = await fetch(`${process.env.REACT_APP_IP_SERVER}/api/PostagensRecentes`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log("TT " + body[0].titulo);
    
    //Armazena os titulos dos mais recentes
    for(let i=0; i<5; i++){
        titulos[i] = body[i].titulo; 
    }

    return body;
  };



export default function TemporaryDrawer() {
  const classes = useStyles();
  const result = callApi();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  

  const toggleDrawer = (side, open) => event => {
      console.log(result);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
            { [titulos[0], titulos[1], titulos[2], titulos[3], titulos[4]].map((text, index) => (
          <ListItem button key={text}>
            
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );


  return (
    <div>
      <Hidden smUp>
        <MenuIcon onClick={toggleDrawer('left', true)}></MenuIcon>
      </Hidden>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

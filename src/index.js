import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cadastro from './Cadastro';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Editar from './Editar';

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/refresh" exact={true} component={App} />
        <Route path="/Cadastro" exact={true} component={Cadastro} />
        <Route path="/Editar/:catId" exact={true} component={Editar} />
    </Switch>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

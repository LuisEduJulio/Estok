import React, {Component} from 'react';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Configuracoes from './Pages/Configuracoes';
import Erro from './Pages/Erro';

import MenuBar from './Component/MenuBar';


class Routes extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
        <MenuBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/configuracoes" component={Configuracoes} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Routes;




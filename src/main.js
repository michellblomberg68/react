import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Order from './pages/order';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/order' component={Order}/>
    </Switch>
  </main>
)

export default Main;
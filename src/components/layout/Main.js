import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../Home';
import Completion from '../Completion/index';

const style = {
  padding: '0 15px 15px 10px'
}

const Main = () => (
  <main style={style}>
    <Route exact path="/" component={Home} />
    <Route path="/completion" component={Completion} />
  </main>
)

export default Main;

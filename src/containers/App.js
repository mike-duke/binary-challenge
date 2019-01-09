import React from 'react';
import { Switch, Route } from 'react-router';
import { About } from '../components/About';
import CardContainer from './CardContainer';
import Landing from './Landing';
import { Page404 } from '../components/Page404';
import '../styles/index.scss';

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/relevant" component={CardContainer} />
        <Route path="/current" component={CardContainer} />
        <Route path="/saved" component={CardContainer} />
        <Route path="/about" component={CardContainer} />
        <Route component={Page404} />
      </Switch>
    </div>
  )
}

export default App;
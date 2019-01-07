import React, { Component } from 'react';
import '../styles/index.scss';
import { connect } from 'react-redux';
import Landing from './Landing';
import CardContainer from './CardContainer';
import { Switch, Route, withRouter } from 'react-router';
import About from '../components/About';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/relevant" component={CardContainer} />
          <Route path="/current" component={CardContainer} />
          <Route path="/saved" component={CardContainer} />
          <Route parh="/about" component={About} />
        </Switch>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  articles: state.articles,
  topic: state.topic
})

export default withRouter(connect(mapStateToProps)(App));

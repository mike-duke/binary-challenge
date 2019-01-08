import React from 'react';
import '../styles/index.scss';
import { connect } from 'react-redux';
import Landing from './Landing';
import CardContainer from './CardContainer';
import { Switch, Route, withRouter } from 'react-router';
import About from '../components/About';
import { Page404 } from '../components/Page404';
import PropTypes from 'prop-types';

export const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/relevant" component={CardContainer} />
        <Route path="/current" component={CardContainer} />
        <Route path="/saved" component={CardContainer} />
        <Route path="/about" component={About} />
        <Route component={Page404} />
      </Switch>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  articles: state.articles,
  topic: state.topic
});

export default withRouter(connect(mapStateToProps)(App));

App.propTypes = {
  articles: PropTypes.array,
  topic: PropTypes.string
}
import React, { Component } from 'react';
import '../styles/index.scss';
import { connect } from 'react-redux';
import Landing from './Landing';
import CardContainer from './CardContainer';
import Filter from './Filter';
import { Switch, Route } from 'react-router';
import About from '../components/About';

class App extends Component {

  render() {
    // if (this.props.topic) {
    //   return (
    //     <div className="App">
    //       <div className="card-and-nav-container">
    //         <CardContainer />
    //         <Nav />
    //         <Filter />
    //       </div>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div className="App">
    //       <div className="landing-container">
    //         <Landing />
    //       </div>
    //     </div>
    //   );
    // }

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

export default connect(mapStateToProps)(App);

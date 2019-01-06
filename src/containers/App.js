import React, { Component } from 'react';
import '../styles/index.scss';
import { connect } from 'react-redux';
import Landing from './Landing';
import CardContainer from './CardContainer';
import Nav from '../components/Nav';

class App extends Component {

  render() {
    if (this.props.topic) {
      return (
        <div className="App">
          <div className="card-and-nav-container">
            <CardContainer />
            <Nav />
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Landing />
        </div>
      );
    }
  }
}

export const mapStateToProps = (state) => ({
  articles: state.articles,
  topic: state.topic
})

export const mapDispatchToProps = (dispatch) => ({
  // addArticlesToStore: (url) => dispatch(fetchArticles(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

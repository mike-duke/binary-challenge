import React, { Component } from 'react';
import '../styles/index.scss';
import { connect } from 'react-redux';
import Landing from './Landing';
import CardContainer from './CardContainer';

class App extends Component {

  render() {
    if (this.props.topic) {
      return (
        <div className="App">
          <CardContainer />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Landing />
        </div>
      );
    }
    // const sources = this.props.articles.reduce((acc, article) => {
    //   const { name } = article.source
    //   if (!acc.includes(name)) {
    //     acc.push(name);
    //   }
    // //   if (name === "BBC News") {
    // //   acc.push(article)
    // // }
    //   return acc;
    // }, [])

    // console.log(sources)
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

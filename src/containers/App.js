import React, { Component } from 'react';
import '../styles/index.scss';
import { fetchArticles } from '../thunks/fetchArticles';
import apiKey from '../apiKey';
import { connect } from 'react-redux';
import Landing from './Landing';

class App extends Component {

  componentDidMount() {
    const url = `https://newsapi.org/v2/everything?q=+parents AND (kid OR kid OR child OR children) AND anxiety&pageSize=100&language=en&sortBy=relevancy&apiKey=${apiKey}`;
    this.props.addArticlesToStore(url);

  }

  render() {
    const sources = this.props.articles.reduce((acc, article) => {
      const { name } = article.source
      if (!acc.includes(name)) {
        acc.push(name);
      }
    //   if (name === "BBC News") {
    //   acc.push(article)
    // }
      return acc;
    }, [])

    console.log(sources)
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  articles: state.articles
})

export const mapDispatchToProps = (dispatch) => ({
  addArticlesToStore: (url) => dispatch(fetchArticles(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

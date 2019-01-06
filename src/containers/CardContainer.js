import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../components/Card';
import apiKey from '../apiKey';
import { fetchRelevantArticles } from '../thunks/fetchRelevantArticles';
import { fetchCurrentArticles } from '../thunks/fetchCurrentArticles';
import Nav from '../components/Nav';
import Filter from '../containers/Filter';

class CardContainer extends Component {

  componentDidMount() {
    const relevantUrl = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kids OR child OR children) AND ${this.props.topic}&pageSize=20&language=en&sortBy=popularity&apiKey=${apiKey}`;
    this.props.addRelevantArticlesToStore(relevantUrl);
    const currentUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5b9c51c910284592a139f895c16d66ce';
    this.props.addCurrentArticlesToStore(currentUrl);
  }
  
  render() {
    const { path } = this.props.match;
    let articlesToDisplay;
    if (path === '/relevant') {
      articlesToDisplay = this.props.relevantArticles.map((article) => {
        return <Card article={article} />
      })
    } else if (path === '/current') {
      articlesToDisplay = this.props.currentArticles.map((article) => {
        return <Card article={article} />
      })
    } else if (path === '/saved') {
      articlesToDisplay = "saved articles";
    }
    
    return (
      <section className="card-and-nav-container">
        <div className="card-container">
          {articlesToDisplay}
          <Nav />
        </div>
        <Filter path={this.props.match.path}/>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  relevantArticles: state.relevantArticles,
  currentArticles: state.currentArticles
})

export const mapDispatchToProps = (dispatch) => ({
  addRelevantArticlesToStore: (url) => dispatch(fetchRelevantArticles(url)),
  addCurrentArticlesToStore: url => dispatch(fetchCurrentArticles(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
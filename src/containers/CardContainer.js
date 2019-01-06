import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../components/Card';
import apiKey from '../apiKey';
import { fetchArticles } from '../thunks/fetchArticles';

class CardContainer extends Component {

  componentDidMount() {
    const url = `https://newsapi.org/v2/everything?q=+parents AND (kid OR kid OR child OR children) AND ${this.props.topic}&pageSize=20&language=en&sortBy=relevancy&apiKey=${apiKey}`;
    this.props.addArticlesToStore(url);
  }
  
  render() {
    const articlesToDisplay = this.props.articles.map((article) => {
      return <Card article={article} />
    })
    console.log(this.props.articles)
    return (
      <section className="card-container">
        {articlesToDisplay}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  articles: state.articles
})

export const mapDispatchToProps = (dispatch) => ({
  addArticlesToStore: (url) => dispatch(fetchArticles(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
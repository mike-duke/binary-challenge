import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '../components/Card';
import apiKey from '../apiKey';
import { fetchRelevantArticles } from '../thunks/fetchRelevantArticles';
import { fetchCurrentArticles } from '../thunks/fetchCurrentArticles';
import Nav from '../components/Nav';
import Filter from '../containers/Filter';
import uuid from 'uuid';

export class CardContainer extends Component {

  componentDidMount() {
    const relevantUrl = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kid OR child OR children) AND ${this.props.topic} &language=en&sortBy=relevancy&apiKey=${apiKey}&pageSize=100`;
    this.props.addRelevantArticlesToStore(relevantUrl);
    const currentUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5b9c51c910284592a139f895c16d66ce';
    this.props.addCurrentArticlesToStore(currentUrl);
  }

  filterRelevantArticles = () => {
    return this.props.relevantArticles.filter((article) => {
      const { topic } = this.props;
      return article.description.includes(topic) || article.title.includes(topic) || article.content.includes(topic);
    }).map((article) => {
      return <Card key={uuid()} article={article} />
    });
  }
  
  render() {
    const { path } = this.props.match;
    let articlesToDisplay;
    switch(path) {
      case '/relevant':
        articlesToDisplay = this.filterRelevantArticles();
        break
      case '/current':
        articlesToDisplay = this.props.currentArticles.map((article) => {
          return <Card key={uuid()} article={article} />
        });
        break
      case '/saved': 
        articlesToDisplay = "saved articles";
        break
      default:
        break;  
    }

    if (this.props.isLoading) {
      return (
        <div className="card-container">
          <div className="loading">
            <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading spinner"/>
          </div>
        </div>
      )
    } else {
      return (
        <section className="card-and-nav-container">
        <div className="card-container">
          {articlesToDisplay}
          <Nav />
        </div>
        <Filter path={path}/>
      </section>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  relevantArticles: state.relevantArticles,
  currentArticles: state.currentArticles,
  topic: state.topic,
  isLoading: state.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
  addRelevantArticlesToStore: (url) => dispatch(fetchRelevantArticles(url)),
  addCurrentArticlesToStore: url => dispatch(fetchCurrentArticles(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

// if (isLoading) {
//   return (
//     <div className="loading">
//       <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading spinner"/>
//     </div>
//   )
// }
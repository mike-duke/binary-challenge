import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import apiKey from '../apiKey';
import { fetchRelevantArticles } from '../thunks/fetchRelevantArticles';
import { fetchCurrentArticles } from '../thunks/fetchCurrentArticles';
import { Card } from '../components/Card';
import { Nav } from '../components/Nav';
import Filter from '../containers/Filter';
import { About } from '../components/About';

export class CardContainer extends Component {

  componentDidMount() {
    const relevantUrl = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kid OR child OR children) AND ${this.props.topic} &language=en&sortBy=relevancy&apiKey=${apiKey}&pageSize=100`;
    this.props.addRelevantArticlesToStore(relevantUrl);
    const currentUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
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
        break;
      case '/current':
        articlesToDisplay = this.props.currentArticles.map((article) => {
          return <Card key={uuid()} article={article} />
        });
        break;
      case '/about':
        articlesToDisplay = <About />;
        break;
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
        <section className="card-container">
          <div className="container-and-nav">
            <div className="container">
              {articlesToDisplay}
            </div>
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

CardContainer.propTypes = {
  relevantArticles: PropTypes.array,
  currentArticles: PropTypes.array,
  topic: PropTypes.string,
  isLoading: PropTypes.bool,
  addRelevantArticlesToStore: PropTypes.func.isRequired,
  addCurrentArticlesToStore: PropTypes.func.isRequired
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../actions';
import { fetchArticles } from '../thunks/fetchArticles';
import apiKey from '../apiKey';

class Filter extends Component {
  
  handleChange = (event) => {
    const { name, value } = event.target;
    const lowerCaseValue = value.toLowerCase();
    let url;
    let selection;
    if (name === 'filter-select') {
      selection = event.target.value;
      url = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kids OR child OR children) AND ${selection}&pageSize=20&language=en&sortBy=popularity&apiKey=${apiKey}`;
    }
    
    if (name === 'source-select' && value.includes('.com')) {
      selection = this.props.topic;
      url = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kids OR child OR children) AND ${selection}&domains=${lowerCaseValue}&language=en&sortBy=popularity&apiKey=${apiKey}`;
    } else if (name === 'source-select' && !value.includes('.com')) {
      selection = this.props.topic;
      url = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kids OR child OR children) AND ${selection}&sources=${lowerCaseValue}&language=en&sortBy=popularity&apiKey=${apiKey}`;
    }
    this.props.addArticlesToStore(url);
    console.log(selection)
    this.props.addTopicToStore(selection);
  }

  render() {
    const sourceOptions = this.props.articles.reduce((sources, article) => {
      if (!sources.includes(article.source.name)) {
        sources.push(article.source.name);
      }
      return sources;
    }, []).map((sourceName) => {
      return <option value={sourceName}>{sourceName}</option>
    })

    return (
      <div className="filter">
      <h2>Torcano</h2>
      <select name="filter-select" id="filter-select" onChange={this.handleChange}>
        <option value="">Select a different topic to gather articles</option>
        <option value="anxiety">Anxiety</option>
        <option value="depression">Depression</option>
        <option value="ADHD">ADHD</option>
        <option value="autism">Autism</option>
      </select>

      <select name="source-select" id="source-select" onChange={this.handleChange}>
        <option value="">Select a source to gather specific articles</option>
        {sourceOptions}
      </select>
    </div>
  )
}
}

export const mapStateToProps = (state) => ({
  articles: state.articles,
  topic: state.topic
});

export const mapDispatchToProps = (dispatch) => ({
  addTopicToStore: (selection) => dispatch(addTopic(selection)),
  addArticlesToStore: (url) => dispatch(fetchArticles(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
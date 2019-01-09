import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTopic } from '../actions';
import { fetchRelevantArticles } from '../thunks/fetchRelevantArticles';
import apiKey from '../apiKey';
import uuid from 'uuid';

export class Filter extends Component {
  
  handleChange = (event) => {
    const { name, value } = event.target;
    const lowerCaseValue = value.toLowerCase();
    let url;
    let selection;
    if (name === 'filter-select') {
      selection = event.target.value;
      url = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kids OR child OR children) AND ${selection}&pageSize=20&language=en&sortBy=popularity&apiKey=${apiKey}`;
    }
    
    if (name === 'source-select' && value.includes('.')) {
      selection = this.props.topic;
      url = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kids OR child OR children) AND ${selection}&domains=${lowerCaseValue}&language=en&sortBy=popularity&apiKey=${apiKey}`;
    } else if (name === 'source-select' && !value.includes('.')) {
      selection = this.props.topic;
      url = `https://newsapi.org/v2/everything?q=+(parent OR parents) AND +(kid OR kids OR child OR children) AND ${selection}&sources=${lowerCaseValue}&language=en&sortBy=popularity&apiKey=${apiKey}`;
    }
    this.props.addRelevantArticlesToStore(url);
    this.props.addTopicToStore(selection);
  }

  filterSelections = () => {
    const namesArray = this.props.relevantArticles.reduce((names, article) => {
      if (!names.includes(article.source.name)) {
        names.push(article.source.name);
      }
      return names;
    }, []);
    
    const sourcesObj = this.props.relevantArticles.reduce((sources, article) => {
      sources[article.source.name] = article.source.id;
      return sources;
    }, {});

    return namesArray.map((name) => {
      if (name.includes('.')) {
        return <option key={uuid()} value={name}>{name}</option>
      } else {
        return <option key={uuid()} value={sourcesObj[name].id}>{name}</option>
      }
    })
  }

  render() {
    const sourceOptions = this.filterSelections();

    return (
      <div className="filter">
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
        <h2>Torcano</h2>
    </div>
  )
}
}

export const mapStateToProps = (state) => ({
  relevantArticles: state.relevantArticles,
  currentArticles: state.currentArticles,
  topic: state.topic
});

export const mapDispatchToProps = (dispatch) => ({
  addTopicToStore: (selection) => dispatch(addTopic(selection)),
  addRelevantArticlesToStore: (url) => dispatch(fetchRelevantArticles(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  relevantArticles: PropTypes.array,
  currentArticles: PropTypes.array,
  topic: PropTypes.string,
  addTopicToStore: PropTypes.func,
  addRelevantArticlesToStore: PropTypes.func
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../actions';

class Landing extends Component {

  handleChange = (event) => {
    const selection = event.target.value;
    this.props.addTopicToStore(selection)
  }

  render() {
    return (
      <div className="landing">
        <h1>Torcano</h1>
        <p>Find the latest news from trusted sources on topics that affect your children, or see what is happening in the world today so you see what they see</p>
        <select name="landing-select" id="landing-select" onChange={this.handleChange}>
          <option value="">Select a topic to gather articles</option>
          <option value="Anxiety">Anxiety</option>
          <option value="Depression">Depression</option>
          <option value="ADHD">ADHD</option>
          <option value="Autism">Autism</option>
        </select>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addTopicToStore: (selection) => dispatch(addTopic(selection))
})

export default connect(null, mapDispatchToProps)(Landing);
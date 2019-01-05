import React, { Component } from 'react';

class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <h1>Torcano</h1>
        <p>Find the latest news from trusted sources on topics that affect your children, or see what is happening in the world today so you see what they see</p>
        <select name="landing-select" id="landing-select">
          <option value="Anxiety">Anxiety</option>
          <option value="Depression">Depression</option>
          <option value="ADHD">ADHD</option>
          <option value="Autism">Autism</option>
        </select>
      </div>
    )
  }
}

export default Landing;
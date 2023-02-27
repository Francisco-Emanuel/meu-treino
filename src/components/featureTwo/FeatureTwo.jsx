import React from 'react';
import './featuretwo.css';

const FeatureTwo = ({ title, text }) => (
  <div className="gpt3__featurestwo-container__feature">
    <div className="gpt3__featurestwo-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__featurestwo-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default FeatureTwo;

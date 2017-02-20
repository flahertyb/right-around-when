import React from 'react';
import styles from '../styles/line.scss';

class Line extends React.Component {
  render() {
    return (
      <div className="line">
        <div className="line__spacer"></div>
        <div className="line__paint"></div>
        <div className="line__spacer"></div>
      </div>
    );
  }
}

export default Line;

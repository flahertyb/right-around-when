import React from 'react';
import styles from '../styles/timeline.scss';
import Line from './Line';
import EventStream from './EventStream';

class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline">
        <EventStream left events={this.props.events.left} />
        <Line />
        <EventStream right events={this.props.events.right} />
      </div>
    );
  }
}

export default Timeline;

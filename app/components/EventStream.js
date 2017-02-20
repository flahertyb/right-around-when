import React from 'react';
import styles from '../styles/event-stream.scss';
import classNames from 'class-names';

class EventStream extends React.Component {

  render() {
    const classes = classNames("event-stream", {
        "event-stream--left": this.props.left,
        "event-stream--right": this.props.right,
    });

    const eventElements = this.props.events.map((event) => {
      return (
        <div className="event" key={`event-${event.id}`}>
          <div className="title">{event.title}</div>
          <div className="description">{event.description}</div>
        </div>
      );
    });

    return (
      <div className={classes}>
        {eventElements}
      </div>
    );
  }

}

export default EventStream;

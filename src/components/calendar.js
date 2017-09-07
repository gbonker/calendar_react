import _ from 'lodash';
import React, { Component } from 'react';
import Event from './event.js';

class Calendar extends Component {
  renderEvents() {
    var events = _.map(this.props.events, event => {
      const { node } = event;
      return (
        <Event 
          key={node.id}
          id={node.id}
          name={node.name}
          date={node.dates.start}
          image={node.images.medium}
        />
      );
    });

    var resultsRender = [];
    for (var i = 0; i < events.length; i++) {
      var clearfix = "clearfix";
      var clearfixNeeded = false;
      resultsRender.push(events[i]);
      // add lg clearfixes for multiples of 4
      if (i % 4 === 3) {
        clearfix += " visible-lg";
        clearfixNeeded = true;
      } 
      // add md clearfixes for multiples of 3
      if (i % 3 === 2) {
        clearfix += " visible-md";
        clearfixNeeded = true;
      }
      // add sm clearfixes for multiples of 2
      if (i % 2 === 1) {
        clearfix += " visible-sm";
        clearfixNeeded = true;
      }  
      if (clearfixNeeded) {
        resultsRender.push(<div key={i} className={clearfix} />);
      }
    }

    return (
      <div className="row">{ resultsRender }</div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderEvents()}
      </div>
    );
  }
}

export default Calendar;
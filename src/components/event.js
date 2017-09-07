import React from 'react';
import moment from 'moment';

const Event = (props) => {
  var bgImageStyle = {
    width: "100%",
    height: "200px",
    backgroundImage: `url(${props.image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", 
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.6)"
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="panel panel-default event-panel center-block" key={props.id} >
        <div
          className="panel-body" 
          style={ bgImageStyle }>
          <h2 className="text-center">{props.name}</h2>
          <p className="event-date">{moment(new Date(props.date)).format("dddd, MMMM Do, YYYY")}</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
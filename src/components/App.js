import React from 'react';
import { gql, graphql } from 'react-apollo';
import '../styles/App.css';

import Header from './header.js';
import Calendar from './calendar.js';

const App = (props) => {
  if (!props.data.calendar) { // if data from the API has not loaded yet
    return (
      <div className="spinner-parent">
        <img src="http://res.cloudinary.com/dxedeitqy/image/upload/v1504816085/Spinner.gif" className="spinner" alt="loading" />
      </div>
    );
  } else {
    const { calendar } = props.data; 
    return (
      <div>
        <Header 
        	name={calendar.name}
          subscriberCount={calendar.subscriberCount}
        />
        <Calendar events={calendar.upcomingEvents.edges} />
      </div>
    );
  }
}

const query = gql`query {
  calendar(shortname: "nfl-49ers") {
    name
    subscriberCount
    
    upcomingEvents: events(first: 24, filterBy: {past: false}) {
      edges {
        node {
          id
          name
          images {
            medium
          }
          dates {
            start
          }
        }
      }
    }
  }
}`;

const AppWithData = graphql(query)(App);

export default AppWithData;

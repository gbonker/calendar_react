import React from 'react';
import { gql, graphql } from 'react-apollo';
import '../styles/App.css';

import Header from './header.js';
import Calendar from './calendar.js';

const App = (props) => {
  var loaded = false;
  if (props.data.calendar) {
    loaded = true;
  }
  if (!loaded) {
    return (
      <p>Loading...</p>
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

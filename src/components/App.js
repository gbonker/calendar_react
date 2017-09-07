import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import '../styles/App.css';

import Header from './header.js';
import Calendar from './calendar.js';

const App = (props) => {
  var loaded = false;
  if (props.data.calendar) {
    loaded = true;
  }
  console.log(props.data);
  if (!loaded) {
    return (
      <p>Loading...</p>
    );
  } else {
    return (
      <div>
        <Header 
        	name={props.data.calendar.name}
          subscriberCount={props.data.calendar.subscriberCount}
        />
        <Calendar />
      </div>
    );
  }
}

const query = gql`query {
  calendar(shortname: "nfl-49ers") {
    name
    subscriberCount
    upcomingEvents: events(first: 10, filterBy: {past: false}) {
      edges {
        node {
          name
          images {
            small
            medium
            large
          }
          dates {
            start
            end
          }
        }
      }
    }
  }
}`;

const AppWithData = graphql(query)(App);

export default AppWithData;

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider, gql, graphql } from 'react-apollo';

import App from './App';

describe('<AppWithData />', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
  	const networkInterface = createNetworkInterface({
  	  uri: 'https://www.stanza.dance/api/graphql'
  	});
  	const client = new ApolloClient({
  	  networkInterface
  	});
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
  	ReactDOM.render(
  		<ApolloProvider client={client}>
  	    <AppWithData />
  	  </ApolloProvider>, div);
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppWithData from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://www.stanza.co/api/graphql'
});

const client = new ApolloClient({
  networkInterface
});

ReactDOM.render(
	<ApolloProvider client={client}>
    <AppWithData />
  </ApolloProvider>, document.getElementById('root'));

registerServiceWorker();

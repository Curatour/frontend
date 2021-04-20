import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/App';
import AppProvider from './context/AppContext'
import {ApolloClient, InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';

const client = new ApolloClient({
  uri: 'https://curatour-be.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('../../sw.js')
      .then((registration) => {
          console.log('SW Registered', registration);
      });
}

if (window.Cypress) {
  serviceWorkerRegistration.unregister();
} else {
  serviceWorkerRegistration.register();
}

window.addEventListener('load', function() {
  var status = document.getElementById("status");
  var log = document.getElementById("log");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();

    log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
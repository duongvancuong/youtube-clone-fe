import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './index.css';
import App from './App';
import Loader from './components/Loader';
import { store, persistor } from './store';
import * as serviceWorker from './serviceWorker';

export const app = {
  run() {
    this.render(App);
  },
  render(Component) {
    const root = document.getElementById('root');
    if (root) {
      ReactDOM.render(
        <Provider store={store}>
          <PersistGate loading={<Loader size={100} block />} persistor={persistor}>
            <Component />
          </PersistGate>
        </Provider>,
        root,
      );
    }
  }
}

app.run();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

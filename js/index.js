require('babel-polyfill');

import React from 'React';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from './components/Game';
import store from './store';

class Root extends React.Component {
  render() {
    return <Provider store={ store }>
      <Game />
    </Provider>;
  }
}

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<Root />, document.getElementById('root'))
);

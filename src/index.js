import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './containers/Home';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/rootReducer'

const theStore = createStore(reducers);

ReactDOM.render(
	<Provider store={theStore}>
		<Home />
	</Provider>,
	document.getElementById('root')

);


import React, { Component } from 'react';
import { Provider } from 'mobx-react'
import store from '../StoreConfig'
import Portfolio from './Portfolio';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Portfolio />
			</Provider>
		);
	}
}

export default App;

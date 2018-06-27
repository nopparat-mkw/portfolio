import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import { Provider } from 'mobx-react'
import stores from './stores'

// For easier debugging
window._____APP_STATE_____ = stores;

const Root = (
	<Provider {...stores}>
		<App/>
	</Provider>
)

ReactDOM.render(Root, document.getElementById('root'));

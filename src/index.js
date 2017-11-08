import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './app'
import store from './store'
import history from './history'

console.log(`App -> ${typeof App}`)
console.log(`Store -> ${typeof Store}`)
console.log(`History -> ${typeof history}`)
console.log(`Provider -> ${typeof Provider}`)
console.log(`ConnectedRouter -> ${typeof ConnectedRouter}`)

const root = document.getElementById('root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App/>
            </div>
        </ConnectedRouter>
    </Provider>,
    root
)


import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Route from './routes';
import GlobalStyles from './styles/global';
import history from './services/history';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route />
                <GlobalStyles />
            </Router>
        </Provider>
    );
}

export default App;

import React from 'react';
import { Router } from 'react-router-dom';

import Route from './routes';
import GlobalStyles from './styles/global';
import history from './services/history';
import './config/ReactotronConfig';

function App() {
    return (
        <Router history={history}>
            <Route />
            <GlobalStyles />
        </Router>
    );
}

export default App;

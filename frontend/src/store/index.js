import createSagaMiddleWare from 'redux-saga';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;
const sagaMiddleWare = createSagaMiddleWare({ sagaMonitor });

const middleWares = [sagaMiddleWare];

const store = createStore(rootReducer, middleWares);

sagaMiddleWare.run(rootSaga);

export default store;

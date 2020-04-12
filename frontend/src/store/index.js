import { persistStore } from 'redux-persist';
import createSagaMiddleWare from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;
const sagaMiddleWare = createSagaMiddleWare({ sagaMonitor });

const middleWares = [sagaMiddleWare];

const store = createStore(persistReducers(rootReducer), middleWares);
const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export { store, persistor };

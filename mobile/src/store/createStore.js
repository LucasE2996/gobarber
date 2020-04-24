import {createStore, compose, applyMiddleware} from 'redux';

export default (reducers, middleWares) => {
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middleWares))
    : applyMiddleware(...middleWares);
  return createStore(reducers, enhancer);
};

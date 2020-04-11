import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middleWares) => {
    const enhancer =
        process.env.NODE_ENV === 'development'
            ? compose(
                  console.tron.createEnhancer(),
                  applyMiddleware(...middleWares)
              )
            : applyMiddleware(...middleWares);
    return createStore(reducers, enhancer);
};

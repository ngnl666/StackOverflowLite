import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

/* Put all middlewares in an array to manage them collectively. */
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;

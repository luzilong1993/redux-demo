import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
import createSageMiddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';

const sageMiddleware = createSageMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sageMiddleware));

sageMiddleware.run(rootSaga)
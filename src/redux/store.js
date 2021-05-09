import { createStore } from 'redux';
import rootReducers from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducers, composeWithDevTools())

export default store;
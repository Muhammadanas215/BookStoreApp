import thunk from 'redux-thunk';
import RootReducer from './Reducers';
import {applyMiddleware, createStore} from 'redux';

const store = createStore(RootReducer, {}, applyMiddleware(thunk));

export {store};

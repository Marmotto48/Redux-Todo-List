import { createStore } from 'redux';
import todo from './Reducer';

const store =createStore(
    todo ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;

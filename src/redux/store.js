import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import tableReducer from './reducers/table_reducer'
import initReducer from './reducers/init_reducer'

const reducers = combineReducers({
    table: tableReducer,
    init: initReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export {store}
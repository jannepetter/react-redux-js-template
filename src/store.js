import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer1 from './reducers/reducer1'

const reducer=combineReducers({ 
    stuff:reducer1,
})
const store=createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store
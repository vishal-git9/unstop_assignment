import {applyMiddleware, legacy_createStore} from "redux" 
import { ticketReducer } from "./tickets/tickets.reducer" // importing ticket reducer
import thunk from "redux-thunk" // using redux thunk for performing async operations

export const store = legacy_createStore(ticketReducer,applyMiddleware(thunk)) // setting up the store for app
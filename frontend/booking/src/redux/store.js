import {applyMiddleware, legacy_createStore} from "redux"
import { ticketReducer } from "./tickets/tickets.reducer"
import thunk from "redux-thunk"

export const store = legacy_createStore(ticketReducer,applyMiddleware(thunk))
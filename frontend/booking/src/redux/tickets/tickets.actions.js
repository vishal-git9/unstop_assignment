import { bookTicketSeatsData, getTicketSeatsData, resetSeatsData } from "./tickets.api"
import { GET_TICKETS_ERROR, GET_TICKETS_LOADING, GET_TICKETS_SUCCESS, PATCH_TICKETS_ERROR, PATCH_TICKETS_LOADING, PATCH_TICKETS_SUCCESS, RESET_TICKETS_ERROR, RESET_TICKETS_LOADING, RESET_TICKETS_SUCCESS } from "./tickets.types"

export const getTicketsAction = ()=>async(dispatch)=>{

    dispatch({type:GET_TICKETS_LOADING}) // pending dispatch action

    try {
        const payload = await getTicketSeatsData() // if promise fulfilled, dispatch action success and update the store
        dispatch({type:GET_TICKETS_SUCCESS,payload})
    } catch (error) {
        dispatch({type:GET_TICKETS_ERROR}) // if rejected, dispatch error action and update the store for the same
    }
}

export const bookTicketsAction = (data)=>async(dispatch)=>{
    dispatch({type:PATCH_TICKETS_LOADING}) // pending dispatch action
    try {
        await bookTicketSeatsData(data) //  making the patch request to book the user asked seats
        const payload = await getTicketSeatsData() // again making the request to get updated tickets data
        dispatch({type:PATCH_TICKETS_SUCCESS,payload}) // if fulfilled, dispatch action success and update the store for the same
    } catch (error) {
        dispatch({type:PATCH_TICKETS_ERROR}) // if rejected, dispatch error action and update the store for the same
    }
}
export const resetTicketsAction = ()=>async(dispatch)=>{
    dispatch({type:RESET_TICKETS_LOADING}) // pending dispatch action
    try {
        await resetSeatsData() // making the api call to reset seats data to default
        const payload = await getTicketSeatsData() // again getting the updated tickets data
        dispatch({type:RESET_TICKETS_SUCCESS,payload}) // if fulfilled, dispatch action type success for updating the store for the same
    } catch (error) {
        dispatch({type:RESET_TICKETS_ERROR}) // if rejected, dispatch error action and update the store for the same
    }
}
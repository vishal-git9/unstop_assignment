import { bookTicketSeatsData, getTicketSeatsData, resetSeatsData } from "./tickets.api"
import { GET_TICKETS_ERROR, GET_TICKETS_LOADING, GET_TICKETS_SUCCESS, PATCH_TICKETS_ERROR, PATCH_TICKETS_LOADING, PATCH_TICKETS_SUCCESS, RESET_TICKETS_ERROR, RESET_TICKETS_LOADING, RESET_TICKETS_SUCCESS } from "./tickets.types"

export const getTicketsAction = ()=>async(dispatch)=>{

    dispatch({type:GET_TICKETS_LOADING})

    try {
        const payload = await getTicketSeatsData()
        dispatch({type:GET_TICKETS_SUCCESS,payload})
    } catch (error) {
        dispatch({type:GET_TICKETS_ERROR})
    }
}

export const bookTicketsAction = (data)=>async(dispatch)=>{
    dispatch({type:PATCH_TICKETS_LOADING})
    try {
        const payload = await bookTicketSeatsData(data)
        dispatch({type:PATCH_TICKETS_SUCCESS,payload})
    } catch (error) {
        dispatch({type:PATCH_TICKETS_ERROR})
    }
}
export const resetTicketsAction = ()=>async(dispatch)=>{
    dispatch({type:RESET_TICKETS_LOADING})
    try {
        await resetSeatsData()
        const payload = await getTicketSeatsData()
        dispatch({type:RESET_TICKETS_SUCCESS,payload})
    } catch (error) {
        dispatch({type:RESET_TICKETS_ERROR})
    }
}
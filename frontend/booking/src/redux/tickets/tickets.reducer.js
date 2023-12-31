import { GET_TICKETS_ERROR, GET_TICKETS_LOADING, GET_TICKETS_SUCCESS, PATCH_TICKETS_ERROR, PATCH_TICKETS_LOADING, PATCH_TICKETS_SUCCESS, RESET_TICKETS_ERROR, RESET_TICKETS_LOADING, RESET_TICKETS_SUCCESS } from "./tickets.types"

// intial state of the reucer
const intialState = {
    tickets:[],
    loading:false,
    error:false
}


export const ticketReducer = (state=intialState,{type,payload})=>{ // getting the type and payload from the tickets actions
    switch(type){
        case GET_TICKETS_LOADING:{
            return{
                ...state,loading:true
            }
        }
        case GET_TICKETS_ERROR:{
            return{
                ...state,error:true
            }
        }
        case GET_TICKETS_SUCCESS:{
            return{
                ...state,tickets:payload,loading:false
            }
        }
        case PATCH_TICKETS_LOADING:{
            return{
                ...state,loading:true
            }
        }
        case PATCH_TICKETS_ERROR:{
            return{
                ...state,error:true
            }
        }
        case PATCH_TICKETS_SUCCESS:{
            return{
                ...state,loading:false,error:false,tickets:payload
            }
        }
        case RESET_TICKETS_SUCCESS:{
            return{
                ...state,loading:false,error:false,tickets:payload
            }
        }
        case RESET_TICKETS_ERROR:{
            return{
                ...state,loading:false,error:true
            }
        }
        case RESET_TICKETS_LOADING:{
            return{
                ...state,loading:true
            }
        }

        default:{
            return state
        }
    }
}
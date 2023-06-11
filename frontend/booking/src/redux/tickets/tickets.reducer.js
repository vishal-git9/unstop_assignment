import { GET_TICKETS_ERROR, GET_TICKETS_LOADING, GET_TICKETS_SUCCESS, PATCH_TICKETS_ERROR, PATCH_TICKETS_LOADING, PATCH_TICKETS_SUCCESS } from "./tickets.types"

const intialState = {
    tickets:[],
    loading:false,
    error:false
}


export const ticketReducer = (state=intialState,{type,payload})=>{
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
                ...state,loading:false,error:false
            }
        }

        default:{
            return state
        }
    }
}
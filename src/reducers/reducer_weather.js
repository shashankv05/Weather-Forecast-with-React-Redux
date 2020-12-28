import {FETCH_WEATHER} from '../actions/index';
export default function(state=[],action){

    switch(action.type){
        case FETCH_WEATHER:
    
            return [action.payload.data,...state];  //inserts at the new record at begining of array

    }
    return state;

}
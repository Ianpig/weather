import { FETCH_WEATHER } from '../actions/index';

export default function( state = [], action ){
    console.log(action)
    switch (action.type) {
        case FETCH_WEATHER :
        if(action.payload.data){
            return [ action.payload.data, ...state ];
        }else {
            alert('查無此地點')
            return state;
        }
    }
    return state;
};
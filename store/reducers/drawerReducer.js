import * as t from '../types';

const initialState = {
    status: false
};

const drawerReducer = (state=initialState, action) => {
    switch(action.type) {
        case t.TOGGLE_DRAWER:
            return {...state, status: action.payload.data}
            break;
        default:
            return {...state}
            break;
    }
};

export default drawerReducer;
import * as t from '../types';

const initialState = {};

const appUser = (state=initialState, action) => {
    switch(action.type) {
        case t.VIEW_USER_PROFILE:
            return {...state, ...action.payload.data}
            break;
        default:
            return {...state}
            break;
    }
};

export default appUser;
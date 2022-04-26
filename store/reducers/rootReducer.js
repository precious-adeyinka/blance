import { combineReducers } from "redux";

// reducers
import drawerReducer from './drawerReducer';
import appUser from './appUser';
import people from './people';

const rootReducers = combineReducers({
    drawer: drawerReducer,
    appUser,
    people
});

export default rootReducers
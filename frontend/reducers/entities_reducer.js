import { combineReducers } from "redux";

import usersReducer from './users_reducer';
import chirpsReducer from "./chirps_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    chirps: chirpsReducer
});

export default entitiesReducer;
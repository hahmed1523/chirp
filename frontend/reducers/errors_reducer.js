import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import chirpErrorsReducer from "./chirp_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    chirp: chirpErrorsReducer
});

export default errorsReducer;


import {
    RECEIVE_CHIRP,
    RECEIVE_CHIRPS,
    DELETE_CHIRP,
    RECEIVE_CHIRP_ERRORS
} from '../actions/chirps_actions';

const chirpErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHIRP_ERRORS:
            return action.errors;
        case RECEIVE_CHIRPS:
            return [];
        case RECEIVE_CHIRP:
            return [];
        case DELETE_CHIRP:
            return [];
        default:
            return state;
    }
};

export default chirpErrorsReducer;
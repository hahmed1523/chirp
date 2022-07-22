import { RECEIVE_CHIRPS, RECEIVE_CHIRP, DELETE_CHIRP } from "../actions/chirps_actions";

const chirpsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHIRPS:
            const chirps = {};
            action.chirps.forEach(chirp => {
                chirps[chirp.id] = chirp;
            });
            return chirps;
        case RECEIVE_CHIRP:
            return Object.assign({}, state, { [action.chirp.id]: action.chirp });
        case DELETE_CHIRP:
            const nextState = Object.assign({}, state);
            delete nextState[action.chirp.id];
            return nextState;
        default:
            return state;
    }
}

export default chirpsReducer;
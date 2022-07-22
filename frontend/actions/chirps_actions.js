import * as APIUtil from "../util/chirps_api_util";

export const RECEIVE_CHIRPS = 'RECEIVE_CHIRPS';
export const RECEIVE_CHIRP = 'RECEIVE_CHIRP';
export const DELETE_CHIRP = 'DELETE_CHIRP';
export const RECEIVE_CHIRP_ERRORS = 'RECEIVE_CHIRP_ERRORS';

const receiveChirps = chirps => ({
    type: RECEIVE_CHIRPS,
    chirps
});

const receiveChirp = chirp => ({
    type: RECEIVE_CHIRP,
    chirp
});

const removeChirp = chirp => ({
    type: DELETE_CHIRP,
    chirp
});

export const receiveErrors = errors => ({
    type: RECEIVE_CHIRP_ERRORS,
    errors
});



export const fetchChirps = () => dispatch => {
    return APIUtil.getChirps()
        .then(chirps => dispatch(receiveChirps(chirps)));
}

export const fetchChirp = (id) => dispatch => {
    return APIUtil.getChirp(id)
        .then(chirp => dispatch(receiveChirp(chirp)));
}

export const createChirp = (chirp) => dispatch => {
    return APIUtil.postChirp(chirp)
        .then(chirp => dispatch(receiveChirp(chirp))
        , err => (
            dispatch(receiveErrors(err.responseJSON))
        ));
}

export const deleteChirp = id => dispatch => {
    return APIUtil.deleteChirp(id)
        .then(chirp => dispatch(removeChirp(chirp)));
}

export const updateChirp = chirp => dispatch => {
    return APIUtil.updateChirp(chirp)
        .then(chirp => dispatch(receiveChirp(chirp))
        ,err => (
            dispatch(receiveErrors(err.responseJSON)) 
            ));
}

export const likeChirp = id => dispatch => {
    return APIUtil.postLikeToChirp(id)
        .then(chirp => dispatch(receiveChirp(chirp))); 
}

export const unlikeChirp = id => dispatch => {
    return APIUtil.deleteLikeFromChirp(id)
        .then(chirp => dispatch(receiveChirp(chirp)));
}

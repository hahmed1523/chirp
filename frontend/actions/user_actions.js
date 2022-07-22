import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user 
});




export const fetchUser = id => dispatch => (
    APIUtil.fetchUser(id)
        .then(user => (
            dispatch(receiveUser(user))
        ))
);

export const follow = id => dispatch => {
    return APIUtil.postFollowToUser(id)
        .then(user => dispatch(receiveUser(user))); 
}

export const unfollow = id => dispatch => {
    return APIUtil.deleteFollowFromUser(id)
        .then(user => dispatch(receiveUser(user)));
}
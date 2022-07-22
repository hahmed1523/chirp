import React from "react";
import { connect } from 'react-redux';
import { fetchChirps, fetchChirp, deleteChirp, likeChirp, unlikeChirp } from "../../actions/chirps_actions";
import { follow, unfollow } from "../../actions/user_actions";
import { asArray } from "../../reducers/selectors";
import ChirpIndex from './chirp_index';

const mapStateToProps = (state, { match }) => {
    const userId = match.params.userId;
    if (userId) {
        return {
            chirps: asArray(state.entities, userId),
            current_user: state.session.id,
            userId:  userId
        };
    } else {
        return {
            chirps: asArray(state.entities),
            current_user: state.session.id
            };
    };  
};

const mapDispatchToProps = (dispatch) => ({
    fetchChirps: () => dispatch(fetchChirps()),
    fetchChirp: id => dispatch(fetchChirp(id)),
    likeChirp: id => dispatch(likeChirp(id)),
    unlikeChirp: id => dispatch(unlikeChirp(id)),
    follow: id => dispatch(follow(id)),
    unfollow: id => dispatch(unfollow(id)),
    deleteChirp: id => dispatch(deleteChirp(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChirpIndex);


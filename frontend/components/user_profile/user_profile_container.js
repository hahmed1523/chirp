import React from "react";
import { connect } from 'react-redux';

import UserProfile from "./user_profile";
import { fetchUser } from "../../actions/user_actions";
import { follow, unfollow } from "../../actions/user_actions";
import { fetchChirps } from "../../actions/chirps_actions";

const mapStateToProps = (state, { match }) => {
    const userId = parseInt(match.params.userId);
    const user = state.entities.users[userId];
    return {
        userId,
        user,
        current_user: state.session.id,
        errors: state.errors.chirp
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    follow: id => dispatch(follow(id)),
    unfollow: id => dispatch(unfollow(id)),
    fetchChirps: () => dispatch(fetchChirps())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
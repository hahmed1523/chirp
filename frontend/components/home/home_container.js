import React from "react";
import { connect } from 'react-redux';

import Home from "./home";

const mapStateToProps = state => {
    return{
        current_user: state.session.id,
        errors: state.errors.chirp
    };

}

export default connect(
    mapStateToProps,
    null
)(Home);


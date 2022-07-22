import { connect } from 'react-redux';

import ChirpForm from './chirp_form';
import { createChirp } from '../../actions/chirps_actions';

const mapStateToProps = (state) => {
    return {
        current_user: state.session.id,
        chirp: { author_id: state.session.id,
                body: "" }
    };
}

const mapDispatchToProps = dispatch => {
    return {
        submit: chirp => dispatch(createChirp(chirp))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChirpForm);
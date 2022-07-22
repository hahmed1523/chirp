import { connect } from 'react-redux';
import React from 'react';

import ChirpForm from './chirp_form';
import { fetchChirp, updateChirp } from '../../actions/chirps_actions';
import { selectChirp } from '../../reducers/selectors';
import { renderErrors } from '../../util/error_util';

const mapStateToProps = (state, ownProps) => {
    const defaultChirp = { author_id: state.session.id, body: ""};
    const chirps = state.entities.chirps;
    const chirp = selectChirp(chirps ,ownProps.match.params.chirpId) || defaultChirp;
    const errors = state.errors.chirp;
    return { chirp,
            errors };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChirp: id => dispatch(fetchChirp(id)),
        submit: chirp => dispatch(updateChirp(chirp))
    };
};

class EditChirpForm extends React.Component {

    componentDidMount() {
        this.props.fetchChirp(this.props.match.params.chirpId);
    }

    render() {
        const { chirp, submit } = this.props;
        if (chirp.body === "") return null;
        return (
            <section className="edit_form_section">
                <h2>Edit Chirp:</h2>
                {renderErrors(this.props)}
                <ChirpForm chirp={chirp} submit={submit} />
            </section>
        );    
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditChirpForm);
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { fetchChirps } from '../../actions/chirps_actions';

const mapStateToProps = (state) => {
    const users = state.entities.users;
    return {
        currentUser: users[state.session.id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchChirps: () => dispatch(fetchChirps())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

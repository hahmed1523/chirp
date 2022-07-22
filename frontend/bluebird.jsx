import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//Testing imports
import { login, logout, signup } from './actions/session_actions';
import { fetchChirps,fetchChirp, likeChirp, createChirp, deleteChirp, updateChirp } from './actions/chirps_actions';
import { postLikeToChirp} from './util/chirps_api_util';
import { fetchUser, follow, unfollow } from './actions/user_actions';
import { selectChirp } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);

    //Testing
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchChirps = fetchChirps;
    window.likeChirp= likeChirp; 
    window.fetchUser = fetchUser;
    window.follow = follow;
    window.unfollow = unfollow; 
    window.fetchChirp = fetchChirp; 
    window.createChirp = createChirp;
    window.deleteChirp = deleteChirp;
    window.updateChirp = updateChirp;
    window.selectChirp = selectChirp;
})
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomeContainer from './home/home_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Footer from './footer/footer';
import UserProfileContainer from './user_profile/user_profile_container';
import EditChirpFormContainer from './chirps/edit_chirp_form_container';
import ChirpFormContainer from './chirps/chirp_form_container';

const App = () => (
    <div>

        <NavBarContainer />

        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/users/:userId" component={UserProfileContainer} />
            <Route path="/chirpings/:chirpId" component={EditChirpFormContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        </Switch>

        <Footer />
    </div>
);

export default App;
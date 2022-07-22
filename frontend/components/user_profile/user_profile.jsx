import React from "react";
import { Route, withRouter } from 'react-router-dom';
import ChirpIndexContainer from "../chirps/chirps_index_container";
import ChirpFormContainer from "../chirps/chirp_form_container";
import { renderErrors } from '../../util/error_util';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    convertDate(date) {
        const new_date = new Date(date);
        const month = new_date.toLocaleString('default', { month: 'long',});
        const year = new_date.getFullYear();
        return `${month} ${year}`;
    }

    followButtonText = () => {
        const { user } = this.props;
        const text = user.followed_by_current_user ? "Unfollow" : "Follow";
        return text;
    }

    followButtonAction = () => {
        const {user, current_user, follow, unfollow, fetchChirps } = this.props;
        if (user.followed_by_current_user) {
            unfollow(user.id)
                .then(_ => fetchChirps());
        }
        else if (current_user) {
            follow(user.id)
            .then(_ => fetchChirps());
        } else {
            this.props.history.push('/login');
        }
    }

    renderChirpForm() {
        if (this.props.current_user === this.props.userId) {
            return (<section className="user_profile_form">
                    <Route path="/users/:userId" component={ChirpFormContainer}/>
                    </section>
            )
        };
    }

    render() {
        const { userId, user } = this.props
        
        if (!user) return null;

        return (
            <section className="user_page_container">
                <section className="user_profile_container">
                    <section className="user_info_section">
                        <section className="user_info_left_side">
                            <div className="user_info">
                                <h3>{user.username}</h3>
                                <p>{user.email}</p>
                            </div>

                            <p className="joined_date"><i className="fa fa-calendar" aria-hidden="true"></i> Joined {this.convertDate(user.created_at)}</p>
                            <ul className="follower_info">
                                <li><strong>{user.followees}</strong> Following</li>
                                <li><strong>{user.followers}</strong> Followers</li>
                                <li><strong>{user.chirp_total}</strong> Chirps</li>
                            </ul>
                        </section>
                        <section className="follow_btn_section">
                            <button className="user_follow_btn" onClick={this.followButtonAction}>{this.followButtonText()}</button>
                        </section>
                        
                    </section>
                </section>
                {renderErrors(this.props)}
                {this.renderChirpForm()}

                <section className="user_chirps_section">
                        <h2>Chirps</h2>

                        <Route exact path="/users/:userId" component={ChirpIndexContainer}/>
                </section>
            </section>
        )
    }
}

export default withRouter(UserProfile);
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fetchChirp } from '../../actions/chirps_actions';


class ChirpItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {

    }

    likeButtonAction = () => {
        const {chirp, current_user, likeChirp, unlikeChirp } = this.props;
        if (chirp.liked_by_current_user) {
            unlikeChirp(chirp.id)
        }
        else if (current_user) {
            likeChirp(chirp.id);
        } else {
            this.props.history.push('/login');
        }
    }

    followButtonAction = () => {
        const {chirp, current_user, follow, unfollow, fetchChirps } = this.props;
        if (chirp.followed_by_current_user) {
            unfollow(chirp.author_id)
            .then(_ => fetchChirps());
            //dispatch receive chirp (needs to be created)
        }
        else if (current_user) {
            follow(chirp.author_id)
              .then(_ => fetchChirps());
        } else {
            this.props.history.push('/login');
        }
    }

    likeButtonText = () => {
        const { chirp } = this.props;
        const text = chirp.liked_by_current_user ? "Unlike" : "Like";
        return text;
    }

    followButtonText = () => {
        const { chirp } = this.props;
        const text = chirp.followed_by_current_user ? "Unfollow" : "Follow";
        return text;
    }

    handleDelete = () => {
        const { chirp, current_user, deleteChirp } = this.props;
        if (current_user === chirp.author_id) {
            deleteChirp(chirp.id);
        }
    }


    renderDeleteButton = () => {
        const { chirp, current_user } = this.props; 
        if (current_user === chirp.author_id) {
            return(
                <section className='edit_delete_section'>
                    <Link to={`/chirpings/${chirp.id}`}>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </Link>
                    <button className='delete_button' onClick={this.handleDelete}>X</button>
                </section>
                
            );
        }
    }


    likes_count() {
        const chirp = this.props.chirp
        if (chirp.likes > 0){
            return chirp.likes;
        }
    }

    render() {
        const chirp  = this.props.chirp
        return (
        <li className="chirp_list_item">
            <section className='author_section'>
                <Link to={`/users/${chirp.author_id}`}><h3 className="chirp_author">{chirp.username}</h3></Link>
                <p className="chirp_email">{chirp.email}</p>
            </section>
            
            <section className='body_section'>
                <p className="chirp_body">{chirp.body}</p>
                <section className='like_section'>
                    <button className="fa fa-thumbs-up like_button" 
                        onClick={this.likeButtonAction}></button>
                    <p><strong>{this.likes_count()} </strong></p>
                </section>
            </section>
            
            <section className='follow_section'>
                {this.renderDeleteButton()}
                <button 
                    onClick={this.followButtonAction}
                    className="follow-btn">{this.followButtonText()}</button>
            </section>
        </li>  
        )
    }
}

export default withRouter(ChirpItem);
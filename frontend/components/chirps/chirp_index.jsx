import React from 'react';
import ChirpItem from './chirp_item';
import { withRouter } from 'react-router-dom';

class ChirpIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchChirps();
    }

    render() {
        const { chirps, userId } = this.props;
        return (
            <div className='chirp_index_container'>
                <ul className='chirp_index_list'>
                    {
                        chirps.map(chirp => (
                            <ChirpItem 
                                key={`chirp${chirp.id}`}
                                chirp={chirp}
                                likeChirp={this.props.likeChirp}
                                unlikeChirp={this.props.unlikeChirp}
                                current_user={this.props.current_user}
                                follow={this.props.follow}
                                unfollow={this.props.unfollow}
                                fetchChirps={this.props.fetchChirps}
                                deleteChirp={this.props.deleteChirp}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default withRouter(ChirpIndex);
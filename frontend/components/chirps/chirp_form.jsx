import React from 'react';
import { withRouter } from 'react-router-dom';

class ChirpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.chirp;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // static getDerivedStateFromProps(props, state) {
    //     
    //     if (props.chirp.id !== state.id) {
    //         return props.chirp;
    //     }
    // }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.submit(this.state)
            .then(_ => this.setState(this.props.chirp))
            .then(_ => {
                if(this.props.location.pathname.includes("chirpings")){
                    this.props.history.goBack();
                }
            });
    }

    render() {
        return (
            <section className='chirp-form'>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        cols="60"
                        rows="7"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="What's on your mind?"
                    />
                    <input type="submit" value="Chirp!"/>
                </form>

            </section>
        )
    }
}

export default withRouter(ChirpForm);
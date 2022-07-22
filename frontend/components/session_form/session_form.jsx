import React from 'react';
import { renderErrors } from '../../util/error_util';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user  = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderEmailInput() {
        if (this.props.formType === 'Signup'){
            return (
                <label>Email:
                <input 
                    type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                />
            </label>
            )
        }
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h3>{this.props.formType}!</h3>
                    {renderErrors(this.props)}
                    <div className="login-form">
                        <label>Username:
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        {this.renderEmailInput()}
                        <label>Password:
                            <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <input className="session-input" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm; 
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, fetchChirps }) => {

    const handleLogout = () => {
        logout().then(_ => fetchChirps());
    }

    const display = currentUser ? (
        <div className="user-info login-buttons">
            <h3>Welcome <span className='user_profile_link'><Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link></span>!</h3>
            <button onClick={handleLogout} className="btn">Logout</button>
        </div>
    ) : (
        <div className="login-buttons">
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>

    );

    return (
        <header className="nav-bar">
            <Link to="/"><h1 className="logo">BLUEBIRD</h1></Link>
            <div>
                {display}
            </div>
        </header>
    )
}

export default NavBar;
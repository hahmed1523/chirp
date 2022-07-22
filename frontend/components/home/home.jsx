import React from "react";
import { Route, Switch } from "react-router-dom";
import ChirpIndexContainer from '../chirps/chirps_index_container';
import ChirpFormContainer from "../chirps/chirp_form_container";
import EditChirpFormContainer from '../chirps/edit_chirp_form_container';
import { renderErrors } from "../../util/error_util";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    renderChirpForm() {
        if (this.props.current_user) {
            return <Route exact path="/" component={ChirpFormContainer}/>
        };
    }

    render() {
        return (
            <div className="home">

                <h1>Chirp Away!</h1>
                {renderErrors(this.props)}
                {this.renderChirpForm()}
                <Route exact path="/" component={ChirpIndexContainer}/>
            </div>
        );
    }

}

// const Home = () => (
//     <div className="home">

//         <h1>Chirp Away!</h1>


//         <Route exact path="/" component={ChirpFormContainer}/>
//         <Route exact path="/" component={ChirpIndexContainer}/>



       
//     </div>
// )

export default Home;
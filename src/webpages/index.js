import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './index.css';
import App from '../App';
import Timer from "../Components/Timer";
import Team from "../Components/Team"
import About from "../Components/About"
import reportWebVitals from '../reportWebVitals';
import TermsAndConditions from "../Components/PrivacyPolicy";
import PrivacyPolicy from "../Components/PrivacyPolicy";
import RoadMap from "../Components/RoadMap";
import RoadmapNew from "../Components/RoadmapNew";
import Piatra from "../Components/PIatra";


const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {About} />
            <Route path = "/piatra" element={<Piatra/>} />
            <Route path = "/gratare" component = {Team} />
            <Route path = "/terms_of_service" component={TermsAndConditions} />
            <Route path = "/termenii_si_conditiile" component={PrivacyPolicy} />
            <Route path = "/gazon" component={RoadmapNew} />
            <Route path = "/pomi" component={RoadmapNew} />
            <Route path = "/fantani" component={RoadmapNew} />
        </Router>
    );
};
export default Webpages;
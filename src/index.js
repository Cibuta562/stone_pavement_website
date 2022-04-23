import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';

import App from "./App"
import Team from "./Components/Team"
import About from "./Components/About"
import Footer from "./Components/Footer";
import reportWebVitals from './reportWebVitals';
import "./Fonts/Roboto/Roboto-Bold.ttf";
import "./Fonts/BebasNeue/BebasNeue/TTF/BebasNeue-Bold.ttf";
import "./Fonts/Archive/Archive/Commercial/OTF/Archive-Regular.otf";
import "./Fonts/Roboto/Roboto-Black.ttf";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import RoadMap from "./Components/RoadMap";
import RoadmapNew from "./Components/RoadmapNew";
import Piatra from "./Components/PIatra";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path = "/termenii_si_conditiile" element={<PrivacyPolicy />} />
            <Route path = "/piatra" element={<Piatra/>} />
        </Routes>
    </Router>,

    document.getElementById("root")
);
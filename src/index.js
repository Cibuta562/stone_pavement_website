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
import Gratare from "./Components/Gratare";
import Gazon from "./Components/Gazon";
import Tui from "./Components/Tui";
import Fantani from "./Components/Fantani";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path = "/termenii_si_conditiile" element={<PrivacyPolicy />} />
            <Route path = "/piatra" element={<Piatra/>} />
            <Route path = "/gratare" element={<Gratare/>} />
            <Route path = "/gazon" element={<Gazon/>} />
            <Route path = "/tui" element={<Tui/>} />
            <Route path = "/fantani" element={<Fantani/>} />
        </Routes>
    </Router>,

    document.getElementById("root")
);
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
 
class About extends React.Component {
    render(){
        return(
            <Router>
                <div className="App">
                    test
                </div>
                <div className="App">
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    </ul>
                </div>
            </Router>
        )
    }
}

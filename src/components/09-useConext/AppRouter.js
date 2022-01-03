import React from 'react';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
  
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <div className="container">
                    <Routes>
                        <Route path="/" element= { <HomeScreen /> } />
                        <Route path="/about" element= { <AboutScreen /> } />
                        <Route path="*"  element= { <HomeScreen /> } />
                        <Route path="/login" element= { <LoginScreen /> } />
                    </Routes>
                </div>

            </div>
        </Router>
    )
}

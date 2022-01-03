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
                <Routes>
                    <Route path="/" element= { <HomeScreen /> } />
                    <Route path="/about" element= { <AboutScreen /> } />
                    <Route path="/login" element= { <LoginScreen /> } />
                    <Route path="*"  element= { <HomeScreen /> } />
                </Routes>

            </div>
        </Router>
    )
}

// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdWbSunny } from 'react-icons/md';
import { MdOutlineWbSunny } from 'react-icons/md';

import { useTheme } from './ThemeContext';


const Header = ({ isLoggedIn, onLogout }) => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <header>
            <nav>
                <h3>IPO</h3>
                <ul>
                    {isLoggedIn ? (
                        <>
                            <li>
                                <Link to="/dashboard">Home</Link>
                            </li>
                            <li>
                                <Link to="/currency">Currency</Link>
                            </li>
                            <li>
                                <button onClick={toggleTheme}>
                                    {isDarkTheme ? <MdOutlineWbSunny /> : <MdWbSunny />}
                                </button>
                            </li>
                            <li>
                                <button onClick={onLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/">Login</Link>
                            </li>
                            <li>
                                <button onClick={toggleTheme}>
                                    {isDarkTheme ? <MdOutlineWbSunny /> : <MdWbSunny />}
                                </button>
                            </li>
                            <li>
                                <Link to="/register">SignUp</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

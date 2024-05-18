import React, { useState } from 'react';
import './App.css';

const darkTheme = {
    background: '#121212',
    color: '#ffffff'
};

const lightTheme = {
    background: '#ffffff',
    color: '#000000'
};

const App = () => {
    const [theme, setTheme] = useState(darkTheme);
    const isDarkTheme = theme === darkTheme;

    const toggleTheme = () => {
        setTheme(isDarkTheme ? lightTheme : darkTheme);
    };

    return (
        <div className={isDarkTheme ? 'container dark-mode' : 'container light-mode'}>
            <h1>David Lambl</h1>
            <h3>Welcome to portfolio of Pittsburgh based developer David Lambl. Here is where I showcase projects and pattern as well as continuously iterate on my workflow.</h3>
            <button className="toggle-button" onClick={toggleTheme}>
                {isDarkTheme ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
};

export default App;
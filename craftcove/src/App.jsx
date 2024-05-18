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
            <h1>Welcome to David Lambel's Portfolio</h1>
            <button className="toggle-button" onClick={toggleTheme}>
                Toggle to {isDarkTheme ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
};

export default App;
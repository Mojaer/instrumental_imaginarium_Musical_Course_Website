import { createContext, useState } from 'react';

export const themeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const value = {
        theme,
        toggleTheme,
    };
    return (
        <themeContext.Provider value={value}>
            {children}

        </themeContext.Provider>
    );
};

export default ThemeProvider;
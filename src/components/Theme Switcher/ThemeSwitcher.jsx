import React, { useEffect , useState } from 'react';
import PropTypes from 'prop-types';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.css';

const ThemeSwitcher = ({ darkClassName = 'dark' }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('theme');
    if (storedPreference) {
      return storedPreference === 'dark';
    } else {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  useEffect(() => {
    const applyTheme = () => {
      if (isDarkMode) {
        document.documentElement.classList.add(darkClassName);
        console.log('Dark mode applied');
      } else {
        document.documentElement.classList.remove(darkClassName);
        console.log('Light mode applied');
      }
    };

    applyTheme(); // Apply theme on component mount

    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, darkClassName]); // Include darkClassName in the dependency array

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log('Theme toggled to:', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div>
      <button
  data-testid="themeSwitcherButton"
  onClick={toggleTheme}
  className={`rounded-full cursor-pointer m-2 transition-colors duration-200 ease-in-out ${
    isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  }`}
  style={{ padding: '0.5rem', width: '3rem', height: '3rem', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
  {isDarkMode ? '☾' : '☼'}
</button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default ThemeSwitcher;

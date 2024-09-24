import { useEffect, useState } from 'react';
import dark from './Images/dark.svg'
import light from './Images/light.svg'
function Dark() {
    const [darkmode, setDarkmode] = useState(localStorage.getItem('darkmode') || 'inactive');

    const enableDarkmode = () => {
        document.documentElement.classList.add('dark'); // Add 'dark' class to the html element
        localStorage.setItem('darkmode', 'active');
        setDarkmode('active');
    };

    const disableDarkmode = () => {
        document.documentElement.classList.remove('dark'); // Remove 'dark' class from the html element
        localStorage.setItem('darkmode', 'inactive');
        setDarkmode('inactive');
    };

    const toggleDarkMode = () => {
        if (darkmode === "active") {
            disableDarkmode();
        } else {
            enableDarkmode();
        }
    };

    useEffect(() => {
        // Apply dark mode based on localStorage on mount
        if (darkmode === "active") {
            enableDarkmode();
        } else {
            disableDarkmode();
        }
    }, [darkmode]);

    return (
        <button
        id="theme-switch"
        onClick={toggleDarkMode}
        className="h-12 w-12 p-0 rounded-full flex justify-center items-center fixed top-5 right-5 bg-black border-2 border-white"
        >
        <img src={light} alt="Light mode icon" />
        <img src={dark} alt="Dark mode icon" />
        </button>

    );
}

export default Dark;



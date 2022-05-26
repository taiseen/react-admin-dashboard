import { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};


export const SettingsContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [isClicked, setIsClicked] = useState(initialState);
    const [themeSettings, setThemeSettings] = useState(false);
    const [currentMode, setCurrentMode] = useState('Light');
    const [currentColor, setCurrentColor] = useState('#03C9D7');


    const setMode = e => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };


    const setColor = color => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    
    // only 1 specific {key:value} wanted to be true, according to user click...
    const handleClick = clicked => setIsClicked({ ...initialState, [clicked]: true });


    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <SettingsContext.Provider value={{
            themeSettings, setThemeSettings,
            currentColor, setCurrentColor,
            currentMode, setCurrentMode,
            activeMenu, setActiveMenu,
            screenSize, setScreenSize,
            isClicked, setIsClicked,
            initialState, handleClick,
            setMode, setColor,
        }}>
            {
                children
            }
        </SettingsContext.Provider>
    );
};


export const useSettingsContext = () => useContext(SettingsContext);
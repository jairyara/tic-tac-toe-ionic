import {useEffect} from "react";
import themeStore from "../store/themeStore";

export const useTheme = () => {
    const {isDarkMode, setDarkMode} = themeStore();

    useEffect(() => {
        const layout = document.querySelector('.layout');
        if (layout){
            layout.classList.toggle('dark-theme', isDarkMode);
            layout.classList.toggle('light-theme', !isDarkMode);
        }
    },[isDarkMode]);

    const handleThemeChange = () => {
        setDarkMode(!isDarkMode);
    }

    return {handleThemeChange};
}
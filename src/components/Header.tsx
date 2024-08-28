import { IonIcon } from '@ionic/react';
import { moonOutline, sunnyOutline } from 'ionicons/icons';
import themeStore from "../store/themeStore";
import {useTheme} from "../hooks/useTheme";
import '../styles/components.css';

interface HeaderProps {
    title: string;
}

export const Header = ({title}:HeaderProps) => {
    const {isDarkMode} = themeStore();
    const {handleThemeChange} = useTheme();

    return (
        <header className='header'>
            <h1>{title}</h1>
            <button onClick={handleThemeChange}>
                    <IonIcon className='header__icon'
                             icon={isDarkMode ? sunnyOutline : moonOutline}>
                    </IonIcon>
            </button>
        </header>
    );
}
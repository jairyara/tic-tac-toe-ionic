import { IonIcon } from '@ionic/react';
import { moonOutline } from 'ionicons/icons';
import '../styles/components.css';
    
interface HeaderProps {
    title: string;
}

export const Header = ({title}:HeaderProps) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button>
                    <IonIcon className='theme' icon={moonOutline}></IonIcon>
            </button>
        </header>
    );
}
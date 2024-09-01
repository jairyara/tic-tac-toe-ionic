import Layout from '../../layout/Layout';
import {IonIcon} from "@ionic/react";
import {useHistory} from "react-router-dom";
import gameStore from '../../store/gameStore';
import {logoIonitron, accessibilityOutline} from "ionicons/icons";
import Logo from '../../assets/logo-tic-tac-toe.png';

export const Home = () => {
    const {setMode} = gameStore((state) => state);
    const history = useHistory();

    const handleStartGame = (mode: string) => {
        if (mode === 'ia') {
            setMode('PvAI')
            history.push('/register');
        } else {
            setMode('PvP');
            history.push('/register');
        }
    }

    return (
        <Layout title="Tic Tac Toe">
            <figure className='logo-container'>
                <img className='logo' src={Logo} alt="Logo Tic Tac Toe"/>
            </figure>
            <section className='select-mode'>
                <h2>¡Bienvenido a Tic Tac Toe!</h2>
                <p>Seleccione un modo de juego</p>
                <section className='select-mode__options'>
                    <button onClick={() => handleStartGame('ia')} className='select-mode__btn select-mode__btn--ia'>
                        <IonIcon className='select-mode__icon' icon={logoIonitron}/>
                        <span>VS IA</span>
                    </button>
                    <button onClick={() => handleStartGame('human')} className='select-mode__btn select-mode__btn--human'>
                        <IonIcon className='select-mode__icon' icon={accessibilityOutline}/>
                        <span>VS Jugador</span>
                    </button>
                </section>
            </section>
        </Layout>
    )
}
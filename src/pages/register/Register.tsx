import Layout from '../../layout/Layout';
import {IonIcon} from "@ionic/react";
import {homeOutline} from "ionicons/icons";
import gameStore from '../../store/gameStore';
import { useRegisterPlayer } from '../../hooks/useRegisterPlayer';
import './Register.css';

const Home: React.FC = () => {
    const {name1, name2, error, setName1, setName2, handleStartGame, handleGoHome} = useRegisterPlayer();
    const {mode} = gameStore((state) => state);

    return (
        <Layout title="Registrar jugadores">
            <h2>Configurar nombres de jugadores</h2>
            {
                error && <article  className='error-message'>
                    {error}
                </article>
            }
            <section>
                <label className='input-register' htmlFor="p1">
                    Jugador 1
                    <input id='p1'
                           value={name1}
                           placeholder={'Ingrese el nombre del jugador 1'}
                           onChange={(e) => setName1(e.target.value!)}
                           type="text"/>
                </label>
                <label className='input-register' htmlFor="p2">
                    Jugador 2
                    <input id='p2'
                           className={mode === 'PvAI' ? 'disabled' : ''}
                           value={mode === 'PvAI' ? 'IA' : name2}
                           placeholder={'Ingrese el nombre del jugador 2'}
                           onChange={(e) => setName2(e.target.value!)}
                           type="text"/>
                </label>
                <button className='btn-action' onClick={handleStartGame}>
                    Iniciar juego
                </button>
                <button className='btn-home' onClick={handleGoHome}>
                    <IonIcon icon={homeOutline} />
                    <span>Ir al inicio</span>
                </button>
            </section>
        </Layout>
    );
};

export default Home;

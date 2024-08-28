import {useState} from "react";
import Layout from '../../layout/Layout';
import './Register.css';
import {useHistory} from "react-router-dom";
import gameStore from '../../store/gameStore';

const Home: React.FC = () => {

    const history = useHistory();
    const setPlayer1 = gameStore((state) => state.setPlayer1);
    const setPlayer2 = gameStore((state) => state.setPlayer2);
    const [name1, setName1] = useState<string>('');
    const [name2, setName2] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleStartGame = () => {
        if (!name1 || !name2) {
            setError('Ambos campos son requeridos');
            return;
        } else {
            setPlayer1(name1);
            setPlayer2(name2);
        }
        history.push('/game');
    }

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
                           value={name2}
                           placeholder={'Ingrese el nombre del jugador 2'}
                           onChange={(e) => setName2(e.target.value!)}
                           type="text"/>
                </label>
                <button className='btn-action' onClick={handleStartGame}>
                    Iniciar juego
                </button>
            </section>

        </Layout>
    );
};

export default Home;

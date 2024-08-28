import Layout from "../../layout/Layout";
import { useHistory } from "react-router-dom";
import gameStore from "../../store/gameStore";

export const Game: React.FC = () => {

    const {player1, player2, resetGame} = gameStore((state) => state);

    const history = useHistory();

    const handleGoRegister = () => {
        history.push('/register');
        resetGame();
    }

    return(
        <Layout title={`${player1} vs ${player2}`}>
            <h2>Game</h2>

            <button className='btn-action' onClick={handleGoRegister}>
                Terminar juego
            </button>


        </Layout>
    )
}
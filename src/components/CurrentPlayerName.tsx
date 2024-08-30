import gameStore from '../store/gameStore';
import { useHistory } from "react-router-dom";
import { syncOutline, settingsOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

export const CurrentPlayerName = () => {
    const history = useHistory();
    const {player1, player2, resetGame, currentPlayer, resetStats } = gameStore((state) => state);

    const handleGoRegister = () => {
        history.push('/register');
        resetGame();
        resetStats();
    }

    const handleNewGame = () => {
        resetGame();
    }

    return (
        <section className='game-options'>
                <button className='game-options__btn' onClick={handleNewGame}>
                    <IonIcon className='game-options__btn--icon' icon={syncOutline} /> 
                </button>
                <p>{currentPlayer === 'O' ? player1 : player2}</p>
                <button className='game-options__btn' onClick={handleGoRegister}>
                    <IonIcon className='game-options__btn--icon' icon={settingsOutline} />
                </button>
        </section>
    )

}
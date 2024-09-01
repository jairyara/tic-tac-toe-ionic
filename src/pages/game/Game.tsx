import Layout from "../../layout/Layout";
import { IonToast } from "@ionic/react";
import {trophyOutline, alertCircleOutline } from "ionicons/icons";
import gameStore from "../../store/gameStore";
import { Score } from "../../components/Score";
import { Board } from "../../components/Board";
import { CurrentPlayer } from "../../components/CurrentPlayer";
import { CurrentPlayerName } from "../../components/CurrentPlayerName";

export const Game: React.FC = () => {
    const {player1, player2, resetGame, winner } = gameStore((state) => state);

    return(
        <Layout title={`${player1} vs ${player2}`}>
            <Score />
            <Board />
            <CurrentPlayer />
            <CurrentPlayerName />
            {winner &&
                <IonToast
                    color={winner === 'Draw' ? 'medium' : 'success'}
                    icon={winner === 'Draw' ? alertCircleOutline : trophyOutline}
                    isOpen={winner !== null}
                    message={`${winner !== 'Draw' ?
                        'El ganador es: ' : ''}${winner === 'Draw' ? 'Es un empate!!' : winner}`}
                    duration={2500}
                    onDidDismiss={() => {
                        resetGame();
                    }}
                />
            }
        </Layout>
    )
}
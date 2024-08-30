
import Layout from "../../layout/Layout";
import gameStore from "../../store/gameStore";
import { Score } from "../../components/Score";
import { Board } from "../../components/Board";
import { CurrentPlayer } from "../../components/CurrentPlayer";
import { CurrentPlayerName } from "../../components/CurrentPlayerName";

export const Game: React.FC = () => {

    const {player1, player2, resetGame, currentPlayer, board, winner, makeMove, turn, resetStats } = gameStore((state) => state);


    return(
        <Layout title={`${player1} vs ${player2}`}>

            <Score />
            <Board />
            <CurrentPlayer />
            <CurrentPlayerName />

            {winner && 
            <h2 className="winner-banner">{`${winner !== 'Draw' ? 
                'El ganador es: ' : ''}`} 
                {winner === 'Draw' ? 'Es un empate!!' : winner}
            </h2>}

        </Layout>
    )
}
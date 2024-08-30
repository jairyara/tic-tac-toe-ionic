import gameStore from "../store/gameStore";
import { UserScore } from "./UserScore";


export const Score = () => {
    const {player1, winsPlayer1, player2, winsPlayer2, draws} = gameStore((state) => state);

    return (
        <section className="score">
            <UserScore player='o' playerName={player1} win={winsPlayer1} />
            <UserScore player='draw' playerName='Empates' win={draws} />
            <UserScore player='x' playerName={player2} win={winsPlayer2} />
        </section>
    )
}
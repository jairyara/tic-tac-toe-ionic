import {useState} from "react";
import {useHistory} from "react-router-dom";
import gameStore from '../store/gameStore';

export const useRegisterPlayer = () => {
    const history = useHistory();
    const setPlayer1 = gameStore((state) => state.setPlayer1);
    const setPlayer2 = gameStore((state) => state.setPlayer2);
    const mode = gameStore((state) => state.mode);
    const [name1, setName1] = useState<string>('');
    const [name2, setName2] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleStartGame = () => {
        if (mode === 'PvAI') {
            setPlayer1(name1);
            setPlayer2('IA');
            history.push('/game');
            return;
        }
        if (!name1 || !name2) {
            setError('Ambos campos son requeridos');
            return;
        } else {
            setPlayer1(name1);
            setPlayer2(name2);
        }
        history.push('/game');
    }

    const handleGoHome = () => {
        history.push('/');
    }

    return {
        name1,
        name2,
        error,
        setName1,
        setName2,
        handleStartGame,
        handleGoHome
    }
}
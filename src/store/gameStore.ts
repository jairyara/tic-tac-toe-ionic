import {create} from 'zustand';

interface GameState {
    player1: string;
    player2: string;
    setPlayer1: (player1: string) => void;
    setPlayer2: (player2: string) => void;
    board: (string | null)[];
    currentPlayer: 'X' | 'O';
    winner: string | null;
    turn: number;

    winsPlayer1: number;
    winsPlayer2: number;
    draws: number;

    resetGame: () => void;
    makeMove: (index: number) => void;
    resetStats: () => void;
}

const useStore = create<GameState>((set) => ({
    player1: '',
    player2: '',
    setPlayer1: (name) => set({player1: name}),
    setPlayer2: (name) => set({player2: name}),

    board: Array(9).fill(null),
    currentPlayer: 'O',
    winner: null,
    turn: 0,

    winsPlayer1: 0,
    winsPlayer2: 0,
    draws: 0,

    resetGame: () => set({
        board: Array(9).fill(null),
        winner: null, turn: 0
    }),

    resetStats: () => set({
        winsPlayer1: 0,
        winsPlayer2: 0,
        draws: 0,
    }),

    makeMove: (index) => set((state) => {
        const newBoard = [...state.board];
        if (!newBoard[index] && !state.winner) {
            newBoard[index] = state.currentPlayer;
            const winner = calculateWinner(newBoard);
            if (winner) {
                if (state.currentPlayer === 'O') {
                    return {
                        board: newBoard,
                        winner: state.player1,
                        winsPlayer1: state.winsPlayer1 + 1
                    };
                } else {
                    return {
                        board: newBoard,
                        winner: state.player2,
                        winsPlayer2: state.winsPlayer2 + 1
                    };
                }
            } else if (state.turn === 8) {
                return {
                    board: newBoard,
                    winner: 'Draw',
                    draws: state.draws + 1
                }
            } else {
                return {
                    board: newBoard,
                    currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
                    turn: state.turn + 1
                }
            }
        }
        return state;
    })
}));

const calculateWinner = (squares: (string | null)[]): string | null => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

export default useStore;
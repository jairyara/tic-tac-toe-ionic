import { IonIcon } from '@ionic/react';
import { ellipseOutline, close, banOutline } from 'ionicons/icons';

interface UserScoreProps {
    player: string;
    playerName: string;
    win: number;
}

export const UserScore = ({player, playerName, win}:UserScoreProps) => {

    return(
        <article className={`user-score ${player === 'x' ? 'user-score__close' : player === 'o' ? 'user-score__ellipse' : 'user-score__ban'}`}>
            <IonIcon className={`user-score__icon`} 
                icon={player === 'x' ? close : player === 'o' ? ellipseOutline : banOutline}  />
            <p className='user-score__value'>
                {`${win} ${player === 'draw' ? "empates" : "victorias"}`}
            </p>
            <h3 className='user-score__name'>
                {playerName}
            </h3>
        </article>
    )
}
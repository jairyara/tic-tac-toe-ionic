import { IonIcon } from "@ionic/react";
import gameStore from '../store/gameStore';
import { ellipseOutline, close } from "ionicons/icons";

export const CurrentPlayer: React.FC = () => {

    const {currentPlayer} = gameStore((state) => state);

    return(
        <section className="current-player">
                <div className={`current-disabled ${currentPlayer === 'O' ? 'bg-ellipse':''}`}>
                    <IonIcon icon={ellipseOutline} />
                </div>
                <div className={`current-disabled ${currentPlayer === 'X' ? 'bg-close' : ''}`}>
                    <IonIcon icon={close} />
                </div>
            </section>
    )
}
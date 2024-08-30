import { IonIcon } from "@ionic/react";
import { ellipseOutline, close, banOutline } from "ionicons/icons";
import gameStore from "../store/gameStore";

export const Board: React.FC = () => {
    const {board, makeMove} = gameStore((state) => state);

    return(
        <section className='board'>
            {board.map((value, index) => (
                <div key={index} className="square" onClick={() => makeMove(index)}>
                    {
                        value && <IonIcon className={`board__icon ${value === 'X' ? 'close' : 'ellipse'}`}
                        icon={value === 'X' ? close : ellipseOutline } />
                    }
                </div>
            ))}
        </section>
    )
}
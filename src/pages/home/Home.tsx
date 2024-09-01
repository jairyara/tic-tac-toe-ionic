import Layout from '../../layout/Layout';
import Logo from '../../assets/logo-tic-tac-toe.png';

export const Home = () => {
    return (
        <Layout title="Tic Tac Toe">
            <img src={Logo} alt="Logo Tic Tac Toe" />
            <section>
                <h2>¡Bienvenido a Tic Tac Toe!</h2>
                <p>Seleccione un modo de juego</p>
                <button>
                    VS IA
                </button>
                <button>
                    VS humano
                </button>
            </section>
        </Layout>
    )
}
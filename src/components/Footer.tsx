
const getYear = () => {
    return new Date().getFullYear();
}

export const Footer = () => {
    return (
        <footer className='footer'>
            <h5>Tic Tac Toe - ETITC</h5>
            <h5>© {getYear()} - All rights reserved</h5>
        </footer>
    );
}
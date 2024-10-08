import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ReactNode } from 'react';
import themeStore from "../store/themeStore";
import '../styles/layout.css';
import '../styles/global.css';

interface LayoutProps {
    children: ReactNode;
    title: string;
}

const Layout = ( {children, title}:LayoutProps ) => {

    const isDarkMode = themeStore((state) => state.isDarkMode);

    return (
        <div className={`layout ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Header title={title} />
            <main className='layout__content'>
                {children}
            </main>
            <Footer />
        </div>
    );
    }

export default Layout;
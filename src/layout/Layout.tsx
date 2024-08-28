import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ReactNode } from 'react';
import '../styles/layout.css';
import '../styles/global.css';

interface LayoutProps {
    children: ReactNode;
    title: string;
}

const Layout = ( {children, title}:LayoutProps ) => {
    return (
        <div className='layout'>
            <Header title={title} />
            <main className='layout__content'>
                {children}
            </main>
            <Footer />
        </div>
    );
    }

export default Layout;
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="min-h-[40vh] border border-red-400">{children}</main>
            <Footer />
        </>
    );
}

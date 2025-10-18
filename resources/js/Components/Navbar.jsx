import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between border border-red-500">
                <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    MyBrand
                </Link>

                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                    <li><Link href="posts/create" className="hover:text-blue-600 transition-colors">Create</Link></li>

                    <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
                    <li><Link href="posts/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
                    <li><Link href="posts/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                </ul>

                <button className="md:hidden text-gray-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="relative max-w-4xl mx-auto">
            <div className='flex rounded-full justify-between items-center mt-4 bg-white px-3 py-2 shadow-lmao'>
                <Link to="/">
                    <img
                        src="https://ui.aceternity.com/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className='rounded-full'
                    />
                </Link>

                <div className='hidden md:flex items-center gap-2'>
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.href} className="px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <button className='md:hidden p-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-2 rounded-lg bg-white shadow-lmao">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


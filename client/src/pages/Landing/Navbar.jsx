import React from 'react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-borders">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <span className="text-secondary font-bold text-xl">T</span>
                            </div>
                            <span className="font-poppins font-bold text-xl text-typography-main tracking-tight">Trackly</span>
                        </Link>
                    </div>

                    {/* Spacer for Center */}
                    <div className="hidden md:flex flex-1"></div>

                    {/* CTA Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="text-typography-main hover:text-primary font-medium transition-colors text-sm sm:text-base">
                            Sign in
                        </Link>
                        <Link to="/signup">
                            <Button className="rounded-full shadow-sm hover:-translate-y-0.5 transition-transform text-sm sm:text-base px-6">Get Started</Button>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

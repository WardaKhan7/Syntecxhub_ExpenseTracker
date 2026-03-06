import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-background font-sans text-typography-main selection:bg-primary/20 flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col justify-center">
                <Hero />
            </div>

            {/* Simple Footer directly within Landing component */}
            <footer className="bg-white border-t border-borders py-8 text-center text-sm text-typography-muted">
                <p>&copy; {new Date().getFullYear()} Trackly Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;

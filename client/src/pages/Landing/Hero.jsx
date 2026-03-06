import React from 'react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

                {/* Hero Top Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-primary relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    </span>
                    The smartest way to track expenses
                    <ChevronRight className="w-4 h-4 ml-1" />
                </div>

                {/* Hero Text */}
                <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-typography-main leading-[1.1] mb-6 tracking-tight max-w-4xl">
                    Master your money. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8C84FF]">Zero effort required.</span>
                </h1>

                <p className="text-typography-muted text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                    Track expenses, plan budgets, and get total financial clarity in one beautiful, secure dashboard designed for modern life.
                </p>

                {/* Hero CTA Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 px-4 sm:px-0">
                    <Link to="/signup" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto rounded-full text-base lg:text-lg px-8 py-6 shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
                            Create Free Account <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link to="/login" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base lg:text-lg px-8 py-6 border-2 border-borders hover:bg-surface hover:text-primary transition-all duration-300">
                            Sign in to Dashboard
                        </Button>
                    </Link>
                </div>

                {/* Trust Indicator */}
                <div className="mt-12 flex items-center justify-center gap-2 text-sm text-typography-muted">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <span>Free forever for individuals. Bank-grade security.</span>
                </div>

                {/* Decorative floating blur behind content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            </div>

            {/* Visual separator rule */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-borders to-transparent"></div>
        </section>
    );
};

export default Hero;

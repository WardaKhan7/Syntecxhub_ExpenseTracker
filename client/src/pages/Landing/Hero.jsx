import React from 'react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                            Announcing Trackly 2.0
                            <ChevronRight className="w-4 h-4" />
                        </div>

                        <h1 className="font-poppins text-h1 font-bold text-typography-main leading-tight mb-6 tracking-tight">
                            Master your money.<br />
                            <span className="text-primary">Zero effort required.</span>
                        </h1>

                        <p className="text-typography-muted text-lg mb-8 max-w-xl">
                            Track expenses, plan budgets, and manage all your accounts in one beautiful dashboard. The modern fintech experience you deserve.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/signup">
                                <Button size="lg" className="w-full sm:w-auto rounded-full text-base shadow-lg shadow-primary/25 hover:-translate-y-1 transition-transform">
                                    Start for free <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base border-2 hover:bg-gray-50">
                                Book a demo
                            </Button>
                        </div>

                        <p className="mt-4 text-sm text-typography-muted">
                            No credit card required. Free forever plan available.
                        </p>
                    </div>

                    {/* Right Image/Mockup */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        {/* Decorative background blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"></div>

                        <div className="relative rounded-2xl bg-white border border-borders shadow-2xl overflow-hidden transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gray-100 flex items-center px-4 py-3 border-b border-borders">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000"
                                alt="Trackly Dashboard Preview"
                                className="w-full object-cover h-[400px] lg:h-[500px]"
                            />

                            {/* Floating Trust Card Overlay */}
                            <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-borders animate-bounce [animation-duration:3s]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">+ $2,400.00</p>
                                        <p className="text-xs text-gray-500">Salary received</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

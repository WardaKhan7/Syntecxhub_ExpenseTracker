import React from 'react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="bg-primary py-20 relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                <div className="w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                <div className="w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="font-poppins text-h2 font-bold text-white mb-6">
                    Ready to take control of your finances?
                </h2>
                <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
                    Join thousands of users who are already saving more, tracking better, and achieving their financial goals with Trackly.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/signup">
                        <Button size="lg" className="rounded-full bg-white text-primary hover:bg-gray-100 border-none font-semibold text-base px-8 w-full sm:w-auto">
                            Create Free Account
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10 border-2 font-semibold text-base px-8 w-full sm:w-auto bg-transparent">
                        Contact Sales
                    </Button>
                </div>

                <p className="text-white/60 text-sm mt-6">
                    Free forever for individuals. Upgrade only when you need it.
                </p>
            </div>
        </section>
    );
};

export default CTA;

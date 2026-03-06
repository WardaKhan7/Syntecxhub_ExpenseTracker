import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import { PieChart, Wallet, CreditCard } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: 'Expense Tracking',
            description: 'Easily categorize and track every transaction you make. Never lose sight of where your money goes.',
            icon: <CreditCard className="w-6 h-6 text-primary" />,
        },
        {
            title: 'Budget Planning',
            description: 'Set realistic budgets and receive alerts when you are close to your limits. Build better spending habits.',
            icon: <PieChart className="w-6 h-6 text-accent" />,
        },
        {
            title: 'Multi-Account Support',
            description: 'Connect checking, savings, and credit cards in one place for a holistic view of your net worth.',
            icon: <Wallet className="w-6 h-6 text-[#F59E0B]" />,
        },
    ];

    return (
        <section id="features" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Capabilities</h2>
                    <h3 className="font-poppins text-h2 font-bold text-typography-main mb-4">
                        Everything you need for total financial clarity
                    </h3>
                    <p className="text-typography-muted text-lg">
                        Trackly was built to provide maximum power with zero clutter. Get actionable insights without the noise.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-none shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <CardTitle className="mb-2">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;

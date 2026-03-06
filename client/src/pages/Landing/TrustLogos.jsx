import React from 'react';

const TrustLogos = () => {
    const logos = [
        { name: 'Notion', url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
        { name: 'Mailchimp', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mailchimp_freddie_icon_pink.svg/512px-Mailchimp_freddie_icon_pink.svg.png' },
        { name: 'Airtable', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Airtable_Logo.svg' },
        { name: 'Gumroad', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Gumroad_logo.svg/512px-Gumroad_logo.svg.png' },
    ];

    return (
        <section className="py-10 border-y border-borders bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-typography-muted mb-6 uppercase tracking-wider">
                    Trusted by modern teams worldwide
                </p>
                <div className="flex justify-center flex-wrap gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo) => (
                        <div key={logo.name} className="flex items-center justify-center">
                            <img
                                src={logo.url}
                                alt={`${logo.name} logo`}
                                className="h-8 object-contain"
                            />
                            {/* Fallback text if logo fails or is not a clean svg */}
                            <span className="ml-2 font-bold text-xl hidden lg:block">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustLogos;

import React from 'react';

const Src = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Header Section */}
            <h1 className="text-2xl uppercase text-gray-600 mb-4">
                SRC
            </h1>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Savitribai Phule Resource Center
                    </h1>

                    <p className="text-gray-700 leading-relaxed">
                        In a world where education is often heralded as the great equalizer, it remains a
                        stark reality that marginalized communities continue to face formidable barriers to
                        accessing quality learning opportunities. In light of this pressing challenge, we are
                        proud to introduce the Savitribai Phule Resource Centre for Education of
                        Marginalized Sections. Named after Savitribai Phule, a trailblazing advocate for
                        women&apos;s rights and education in 19th century India, our center is driven by the
                        enduring belief that education is a fundamental right, not a privilege.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Drawing inspiration from Savitribai Phule&apos;s legacy of courage and compassion, we
                        endeavor to create a space where individuals from marginalized backgrounds can
                        access the tools, resources, and support necessary to unlock their full potential.
                        Through targeted initiatives, community engagement, and a commitment to social
                        justice,Savitribai Phule Resource Centre aims to break down systemic barriers to
                        education and empower marginalized communities to shape their own futures. Our
                        vision is one of inclusivity, equity, and opportunity for all, regardless of caste, creed,
                        or religious identity.
                    </p>
                </div>

                {/* Right Column - Image */}
                <div className="md:pl-8">
                    <img
                        src="/src-img.jpeg"
                        alt="Happy children learning"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Ready to Begin Section */}
            <div className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Ready to begin ?
                </h2>

                {/* Registration Button */}
                <div className="bg-yellow-400 rounded-lg p-6 flex justify-between items-center hover:bg-yellow-300 transition-colors cursor-pointer">
                    <div>
                        <div className="text-sm font-medium mb-2">REGISTER NOW</div>
                        <div className="text-lg font-semibold">Ready to begin? Register for our Foundation Course</div>
                    </div>
                    <div className="text-2xl">→</div>
                </div>
            </div>
        </div>
    );
};

export default Src;
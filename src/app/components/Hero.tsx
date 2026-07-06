'use client';

import Image from "next/image";

export const Hero = () => {
    return (
        <div id="home" className="w-full min-h-[89vh] bg-linear-to-b from-[#120a07] via-[#2d120a] to-[#5a2512] flex items-center scroll-mt-20">

            <div className="container mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-left flex flex-col items-start">
                    {/* Premium Pill Badge */}
                    <div className="inline-flex items-center gap-2 border border-[#bfa37a]/30 bg-[#bfa37a]/5 px-3 py-1 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bfa37a]" />
                        <span className="text-[#bfa37a] text-xs font-semibold uppercase tracking-wider font-sans">
                            Prestigious Learning
                        </span>
                    </div>

                    {/* Typography Matched Heading */}
                    <h1 className="font-serif leading-tight mb-6">
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white">
                            Devang Chess
                        </span>
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium italic text-[#bfa37a] mt-1">
                            Academy
                        </span>
                    </h1>

                    {/* Description Text */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-400/80 max-w-xl leading-relaxed mb-8 font-sans">
                        Unlock your potential with our expert coaching and personalized training programs.
                        Elevate your game to the grandmaster level.
                    </p>

                    {/* Styled Action Buttons */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center bg-[#bfa37a] text-neutral-900 font-bold px-6 py-3.5 rounded-md hover:bg-[#aa8f65] transition-all duration-300 shadow-md text-sm sm:text-base w-full sm:w-auto"
                        >
                            Book a Session
                        </a>

                        <a
                            href="#champions"
                            className="inline-flex items-center justify-center bg-transparent text-white font-bold px-8 py-3.5 rounded-md border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                        >
                            Our Story
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex items-center">
                    <Image
                        src="/hero3.png"
                        alt="Knight"
                        width={2200}
                        height={2200}
                        className="w-full md:w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

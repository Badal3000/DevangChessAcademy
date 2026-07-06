'use client';

import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="bg-white scroll-mt-20">
            <div className="w-full min-h-screen flex items-center bg-white px-4 ">

                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* LEFT IMAGE SECTION */}
                    <div className="w-full md:w-1/2 relative flex justify-center items-center">

                        {/* Gradient glow background (keeps your same bg feel but better depth) */}
                        <div className="absolute w-[320px] h-80 md:w-105 md:h-105 bg-linear-to-r from-[#ab432c] via-[#cc6c3c] to-[#f6bc56] blur-3xl opacity-40 rounded-full"></div>

                        {/* Image wrapper */}
                        <div className="relative z-10 p-4 md:p-6">
                            <Image
                                src="/knight.png"
                                alt="About Us"
                                width={480}
                                height={480}
                                className="w-70 md:w-105 lg:w-120 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 -scale-x-100"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT SECTION */}
                    <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-0 text-center md:text-left mt-8 md:mt-0">

                        <div className="flex flex-col items-start">
                            {/* The decorative gradient line from image_dedf61.png */}

                            <p className="text-[#E2874B] font-semibold tracking-wider uppercase text-sm md:text-base mb-2">
                                About Us
                            </p>
                            <div className="w-24 h-0.5 bg-linear-to-r from-[#E2874B] via-[#ba713e]/50 to-transparent mb-4" />
                        </div>


                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug md:leading-tight mb-2 md:mb-2">
                            About Devang Chess Academy

                        </h2>



                        {/* Core Description Paragraph */}
                        <p className="text-gray-600 text-left text-sm sm:text-base md:text-lg leading-7 md:leading-relaxed mb-6 md:mb-8 font-sans max-w-xl">
                            At Devang Academy, we are passionate about chess and dedicated to helping players of all levels improve their skills.
                            Our expert coaches provide personalized training programs tailored to your unique needs and goals.
                            Whether you&apos;re a beginner or advanced player, we help you grow with structured learning and strategy-focused training.
                        </p>

                        {/* Feature points - Stabilized container */}
                        <div className="space-y-3 mb-6 md:mb-8 max-w-lg w-full flex flex-col items-start">
                            <div className="flex items-start gap-2 text-gray-700 text-left text-sm sm:text-base">
                                <span className="text-green-600 mt-0.5 shrink-0">✔</span>
                                <span>Personalized coaching for every level</span>
                            </div>

                            <div className="flex items-start gap-2 text-gray-700 text-left text-sm sm:text-base">
                                <span className="text-green-600 mt-0.5 shrink-0">✔</span>
                                <span>Strategy-based learning approach</span>
                            </div>

                            <div className="flex items-start gap-2 text-gray-700 text-left text-sm sm:text-base">
                                <span className="text-green-600 mt-0.5 shrink-0">✔</span>
                                <span>Expert chess mentors & practice sessions</span>
                            </div>
                        </div>
                        {/* Button */}
                        <a
                            href="#contact"
                            className="inline-block w-full sm:w-auto bg-[#E2874B] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#d06b2c] hover:shadow-lg transition-all duration-300"
                        >
                            Book a Session
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

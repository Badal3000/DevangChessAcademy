import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-[#120a07] text-white pt-12">
            {/* Main Footer */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">

                    {/* Left - Logo */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/devanshlogo.png"
                                alt="Devansh Academy"
                                width={56}
                                height={56}
                                className="w-14 h-14 object-contain"
                            />
                            <h2 className="text-2xl font-bold text-[#E2874B]">
                                Devang Chess Academy
                            </h2>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                            Empowering chess players with expert coaching,
                            strategic training, and world-class mentorship.
                        </p>
                    </div>

                    {/* Middle - Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#E2874B]">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-300">
                            <a href="#home" className="hover:text-[#E2874B] transition">
                                Home
                            </a>
                            <a href="#about" className="hover:text-[#E2874B] transition">
                                About
                            </a>
                            <a href="#courses" className="hover:text-[#E2874B] transition">
                                Courses
                            </a>
                            <a href="#champions" className="hover:text-[#E2874B] transition">
                                Champions
                            </a>
                            <a href="#gallery" className="hover:text-[#E2874B] transition">
                                Gallery
                            </a>
                            <a href="#feedback" className="hover:text-[#E2874B] transition">
                                Feedback
                            </a>
                            <a href="#contact" className="hover:text-[#E2874B] transition">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Right - Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#E2874B]">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-300">
                            <a href="mailto:devangchessacademy@gmail.com">
                                devangchessacademy@gmail.com
                            </a>

                            <a href="tel:+917304209512">
                                +91 7304209512
                            </a>
                            <a href="tel:+918928190057">
                                +91 8928190057
                            </a>

                             <a href="tel:+918928190057">
                                +91 84528 19087
                            </a>

                            <p>
                                Devang Chess Academy YMCA International House, 18, YMCA Rd, Mumbai Central, Mumbai - 400008.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-2 mt-5 text-white">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/devangchessacademy?igsh=MTlvYjR5Mmlpb3V6Yw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E2874B] transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5z" />
                                    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zM17.5 6.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/7304209512"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E2874B] transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.16 1.6 5.98L0 24l6.27-1.64a11.88 11.88 0 0 0 5.8 1.48h.01c6.57 0 11.91-5.34 11.91-11.92a11.84 11.84 0 0 0-3.47-8.44zM12.08 21.8a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.72.97 1-3.63-.24-.37a9.85 9.85 0 1 1 8.34 4.61z" />
                                    <path d="M17.52 14.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a
                                href="https://youtube.com/@devangchessacademy?si=iisBm-rGg_wSPT-i"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E2874B] transition duration-300 hover:scale-110"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566a2.997 2.997 0 0 0-2.11 2.12C0 8.08 0 12 0 12s0 3.92.502 5.814a2.997 2.997 0 0 0 2.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12C24 15.92 24 12 24 12s0-3.92-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                                </svg>
                            </a>

                            {/* Facebook
                            <a
                                href="https://facebook.com/devanshacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E2874B] transition duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8H6v4h3v12h5V12h3.64L18 8h-4V6.33c0-.95.19-1.33 1.11-1.33H18V0h-3.81C10.6 0 9 1.58 9 4.62V8z" />
                                </svg>
                            </a> */}

                            {/* LinkedIn
                            <a
                                href="https://linkedin.com/company/devanshacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#E2874B] transition duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M4.98 3.5A2.5 2.5 0 1 1 2.5 6a2.5 2.5 0 0 1 2.48-2.5zM3 8h4v13H3zM9 8h3.83v1.77h.05A4.2 4.2 0 0 1 16.67 8c4 0 4.73 2.63 4.73 6.05V21h-4v-6.2c0-1.48 0-3.38-2.06-3.38s-2.38 1.61-2.38 3.27V21H9z" />
                                </svg>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/10 py-4 text-center text-gray-400 text-sm">
                Copyright {new Date().getFullYear()} Devang Chess Academy. All Rights Reserved.
            </div>
        </footer>
    );
};

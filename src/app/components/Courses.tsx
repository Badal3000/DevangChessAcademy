'use client';

import Image from "next/image";
import { useRef, useState } from "react";

const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbwAlhhR4cD2uF1u-d1OM9mVGo-veXDuMzv0A9NibujXg91w5beWVHfFdC-MB_uopVwqDw/exec";

const courses = [
    {
        title: "Beginner Chess Foundation",
        image: "/hero2.png",
        description:
            "Learn piece movement, board vision, checkmates, and the habits needed to play complete games with confidence.",
        level: "Beginner",
        details: ["Basics", "Checkmates", "Practice games"],
    },
    {
        title: "Intermediate Strategy Builder",
        image: "/hero1.png",
        description:
            "Improve calculation, tactics, planning, and middlegame decision-making through guided positions and review.",
        level: "Intermediate",
        details: ["Tactics", "Planning", "Game review"],
    },
    {
        title: "Tournament Preparation",
        image: "/champ1.jpeg",
        description:
            "Prepare for competitive chess with opening routines, clock handling, notation, and tournament mindset.",
        level: "Tournament",
        details: ["Openings", "Clock play", "Notation"],
    },
    {
        title: "Advanced Masterclass",
        image: "/hero3.png",
        description:
            "Deepen your chess with positional themes, endgame technique, candidate moves, and serious analysis work.",
        level: "Advanced",
        details: ["Endgames", "Analysis", "Technique"],
    },
    {
        title: "Personal Coaching Program",
        image: "/TirthaAgarwal.jpg",
        description:
            "One-to-one training plan for students who need focused guidance, custom homework, and regular progress tracking.",
        level: "Personal",
        details: ["1:1 coaching", "Homework", "Progress plan"],
    },
];

type Course = (typeof courses)[number];

export const Courses = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const slideCourses = (direction: "prev" | "next") => {
        const carousel = carouselRef.current;

        if (!carousel) {
            return;
        }

        carousel.scrollBy({
            left: direction === "next" ? 340 : -340,
            behavior: "smooth",
        });
    };

    const closeForm = () => {
        if (!loading) {
            setSelectedCourse(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedCourse) {
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                body: JSON.stringify({
                    ...formData,
                    course: selectedCourse.title,
                    message:
                        formData.message || `Course enquiry: ${selectedCourse.title}`,
                }),
            });

            await response.json();
            alert("Enrollment enquiry sent successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setSelectedCourse(null);
        } catch (error) {
            console.error(error);
            alert("Failed to send enquiry.");
        }

        setLoading(false);
    };

    return (
        <section id="courses" className="bg-[#fff8f2] py-16 px-4 scroll-mt-20">
            <div className="container mx-auto">
                <div className="mb-10 flex flex-col items-center text-center">
                    <p className="text-black font-semibold tracking-wider uppercase text-lg md:text-2xl mb-2">
                        Chess Courses
                    </p>
                    <div className="w-40 h-0.5 bg-linear-to-r from-transparent via-[#E2874B] to-transparent mb-4" />
                    <p className="max-w-2xl text-sm sm:text-base text-gray-600 leading-7">
                        Choose the right path for your chess level, from first moves to serious tournament preparation.
                    </p>
                </div>

                <div className="mb-5 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => slideCourses("prev")}
                        className="h-11 w-11 rounded-full border border-orange-200 bg-white text-xl font-bold text-[#E2874B] shadow-sm transition hover:bg-orange-50"
                        aria-label="Previous course"
                    >
                        {"<"}
                    </button>
                    <button
                        type="button"
                        onClick={() => slideCourses("next")}
                        className="h-11 w-11 rounded-full border border-orange-200 bg-white text-xl font-bold text-[#E2874B] shadow-sm transition hover:bg-orange-50"
                        aria-label="Next course"
                    >
                        {">"}
                    </button>
                </div>

                <div
                    ref={carouselRef}
                    className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
                >
                    {courses.map((course) => (
                        <article
                            key={course.title}
                            className="min-w-[280px] snap-start overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg sm:min-w-[340px] lg:min-w-[360px]"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(min-width: 1024px) 360px, 90vw"
                                    className="object-cover"
                                />
                                <div className="absolute left-4 top-4 rounded-full bg-[#120a07]/85 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f6bc56]">
                                    {course.level}
                                </div>
                            </div>

                            <div className="flex min-h-[300px] flex-col p-6">
                                <h2 className="text-xl font-bold leading-tight text-gray-950">
                                    {course.title}
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    {course.description}
                                </p>

                                <div className="mt-5 grid gap-2">
                                    {course.details.map((detail) => (
                                        <div
                                            key={detail}
                                            className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-gray-800"
                                        >
                                            {detail}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedCourse(course)}
                                    className="mt-auto inline-flex w-full items-center justify-center rounded-xl bg-[#E2874B] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#d06b2c]"
                                >
                                    Enroll Now
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {selectedCourse && (
                <div
                    className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="enquiry-title"
                >
                    <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
                        <div className="mb-5 flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-[#E2874B]">
                                    Course Enquiry
                                </p>
                                <h3 id="enquiry-title" className="mt-1 text-xl font-bold text-gray-950">
                                    {selectedCourse.title}
                                </h3>
                            </div>
                        <button
                            type="button"
                            onClick={closeForm}
                            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-xl leading-none text-gray-700 transition hover:bg-gray-100"
                            aria-label="Close enquiry form"
                        >
                            x
                        </button>
                    </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-2 block w-full rounded-xl border-2 border-[#E2874B]/50 px-4 py-3 text-black outline-none transition focus:border-[#E2874B] focus:ring-4 focus:ring-[#E2874B]/20"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-2 block w-full rounded-xl border-2 border-[#E2874B]/50 px-4 py-3 text-black outline-none transition focus:border-[#E2874B] focus:ring-4 focus:ring-[#E2874B]/20"
                                        placeholder="Email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="text"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="mt-2 block w-full rounded-xl border-2 border-[#E2874B]/50 px-4 py-3 text-black outline-none transition focus:border-[#E2874B] focus:ring-4 focus:ring-[#E2874B]/20"
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-2 block w-full resize-none rounded-xl border-2 border-[#E2874B]/50 px-4 py-3 text-black outline-none transition focus:border-[#E2874B] focus:ring-4 focus:ring-[#E2874B]/20"
                                    placeholder="Any preferred batch timing?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-xl bg-[#E2874B] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#d06b2c] disabled:opacity-60"
                            >
                                {loading ? "Sending..." : "Submit Enquiry"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

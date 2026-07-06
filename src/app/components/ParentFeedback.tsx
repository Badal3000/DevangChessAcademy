'use client';

import { useRef } from "react";

const feedbacks = [
    {
        parent: "Priya Shah",
        student: "Parent of Aarav",
        rating: "5/5",
        text:
            "The coaching is structured and patient. Aarav now thinks before every move and enjoys solving chess puzzles at home.",
    },
    {
        parent: "Rohit Mehta",
        student: "Parent of Kiara",
        rating: "5/5",
        text:
            "We saw a big improvement in confidence. The academy gives clear feedback after sessions and keeps learning very practical.",
    },
    {
        parent: "Neha Agarwal",
        student: "Parent of Vivaan",
        rating: "5/5",
        text:
            "The tournament preparation helped Vivaan stay calm during games. The coaches focus on discipline as much as chess skill.",
    },
    {
        parent: "Amit Jain",
        student: "Parent of Reyansh",
        rating: "5/5",
        text:
            "The classes are engaging and focused. Reyansh has become more patient and now reviews his mistakes after every game.",
    },
    {
        parent: "Sneha Kapoor",
        student: "Parent of Anaya",
        rating: "5/5",
        text:
            "Anaya started as a beginner and now confidently plays with older students. The step-by-step teaching really works.",
    },
    {
        parent: "Karan Desai",
        student: "Parent of Mihir",
        rating: "5/5",
        text:
            "The coaches explain strategy in a simple way. Mihir has improved his openings and thinks much faster during practice games.",
    },
    {
        parent: "Pooja Iyer",
        student: "Parent of Tara",
        rating: "5/5",
        text:
            "We love the regular feedback. Tara feels motivated after every session and has developed a strong interest in tournaments.",
    },
    {
        parent: "Manish Patel",
        student: "Parent of Dhruv",
        rating: "5/5",
        text:
            "Dhruv's concentration has improved a lot. The academy balances discipline, fun, and serious chess learning very well.",
    },
    {
        parent: "Riya Malhotra",
        student: "Parent of Myra",
        rating: "5/5",
        text:
            "Myra enjoys the puzzle sessions the most. She has started spotting tactics quickly and plays with much more confidence.",
    },
    {
        parent: "Sandeep Kulkarni",
        student: "Parent of Kabir",
        rating: "5/5",
        text:
            "The academy helped Kabir prepare for his first competition. The guidance on time control and mindset was excellent.",
    },
];

export const ParentFeedback = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const slideFeedback = (direction: "prev" | "next") => {
        const carousel = carouselRef.current;

        if (!carousel) {
            return;
        }

        carousel.scrollBy({
            left: direction === "next" ? 340 : -340,
            behavior: "smooth",
        });
    };

    return (
        <section id="feedback" className="bg-[#fff8f2] py-16 px-4 scroll-mt-20">
            <div className="container mx-auto">
                <div className="mb-10 flex flex-col items-center text-center">
                    <p className="text-black font-semibold tracking-wider uppercase text-lg md:text-2xl mb-2">
                        Parent Feedback
                    </p>
                    <div className="w-44 h-0.5 bg-linear-to-r from-transparent via-[#E2874B] to-transparent mb-4" />
                    <p className="max-w-2xl text-sm sm:text-base text-gray-600 leading-7">
                        What parents say about their children&apos;s chess journey at Devang Chess Academy.
                    </p>
                </div>

                <div className="mb-5 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => slideFeedback("prev")}
                        className="h-11 w-11 rounded-full border border-orange-200 bg-white text-xl font-bold text-[#E2874B] shadow-sm transition hover:bg-orange-50"
                        aria-label="Previous feedback"
                    >
                        {"<"}
                    </button>
                    <button
                        type="button"
                        onClick={() => slideFeedback("next")}
                        className="h-11 w-11 rounded-full border border-orange-200 bg-white text-xl font-bold text-[#E2874B] shadow-sm transition hover:bg-orange-50"
                        aria-label="Next feedback"
                    >
                        {">"}
                    </button>
                </div>

                <div
                    ref={carouselRef}
                    className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
                >
                    {feedbacks.map((feedback) => (
                        <article
                            key={feedback.parent}
                            className="flex min-h-[280px] min-w-[280px] snap-start flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-lg sm:min-w-[340px] lg:min-w-[360px]"
                        >
                            <div className="mb-5 flex items-center justify-between gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#120a07] text-lg font-bold text-[#f6bc56]">
                                    {feedback.parent
                                        .split(" ")
                                        .map((name) => name[0])
                                        .join("")}
                                </div>
                                <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-[#E2874B]">
                                    {feedback.rating}
                                </span>
                            </div>

                            <p className="text-sm leading-7 text-gray-600">
                                &quot;{feedback.text}&quot;
                            </p>

                            <div className="mt-auto pt-6">
                                <h3 className="font-bold text-gray-950">
                                    {feedback.parent}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    {feedback.student}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

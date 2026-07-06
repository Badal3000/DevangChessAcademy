'use client';

import Image from "next/image";
import { useState } from "react";

const academyImages = [
    "/hero.png",
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
    "/knight.png",
    "/hor.png",
    "/123.png",
    "/devanshlogo.png",
    "/champ1.jpeg",
    "/TirthaAgarwal.jpg",
];

const tournamentImages = [
    "/champ1.jpeg",
    "/TirthaAgarwal.jpg",
    "/img1.jpeg",
    "/hero2.png",
    "/hero1.png",
    "/hero.png",
    "/123.png",
    "/hor.png",
    "/knight.png",
    "/devanshlogo.png",
];

const albums = [
    {
        title: "Tournament Album",
        cover: "/champ1.jpeg",
        description: "Dummy collection of tournament practice, results, and student match moments.",
        images: tournamentImages,
    },
    {
        title: "Academy Album",
        cover: "/hero1.png",
        description: "Dummy collection of academy training, classroom moments, and chess activities.",
        images: academyImages,
    },
];

type Album = (typeof albums)[number];

export const Gallery = () => {
    const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const openAlbum = (album: Album) => {
        setActiveAlbum(album);
        setActiveImageIndex(0);
    };

    const moveImage = (direction: "prev" | "next") => {
        if (!activeAlbum) {
            return;
        }

        setActiveImageIndex((currentIndex) => {
            const imageCount = activeAlbum.images.length;

            if (direction === "next") {
                return (currentIndex + 1) % imageCount;
            }

            return (currentIndex - 1 + imageCount) % imageCount;
        });
    };

    return (
        <section id="gallery" className="bg-white py-16 px-4 scroll-mt-20">
            <div className="container mx-auto">
                <div className="mb-10 flex flex-col items-center text-center">
                    <p className="text-black font-semibold tracking-wider uppercase text-lg md:text-2xl mb-2">
                        Gallery
                    </p>
                    <div className="w-32 h-0.5 bg-linear-to-r from-transparent via-[#E2874B] to-transparent mb-4" />
                    <p className="max-w-2xl text-sm sm:text-base text-gray-600 leading-7">
                        Open an album to view every image in full screen with next, previous, and thumbnail controls.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {albums.map((album) => (
                        <button
                            key={album.title}
                            type="button"
                            onClick={() => openAlbum(album)}
                            className="group relative min-h-[360px] overflow-hidden rounded-2xl text-left shadow-xl"
                        >
                            <Image
                                src={album.cover}
                                alt={album.title}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#120a07]/95 via-[#120a07]/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#f6bc56]">
                                    {album.images.length} Photos
                                </p>
                                <h3 className="text-2xl font-bold sm:text-3xl">
                                    {album.title}
                                </h3>
                                <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                                    {album.description}
                                </p>
                                <span className="mt-5 inline-flex rounded-xl bg-[#E2874B] px-5 py-3 text-sm font-semibold text-white">
                                    Open Album
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {activeAlbum && (
                <div
                    className="fixed inset-0 z-[130] flex flex-col bg-[#080403] text-white"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${activeAlbum.title} full screen gallery`}
                >
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#f6bc56]">
                                {activeImageIndex + 1} / {activeAlbum.images.length}
                            </p>
                            <h3 className="text-lg font-bold sm:text-xl">
                                {activeAlbum.title}
                            </h3>
                        </div>
                        <button
                            type="button"
                            onClick={() => setActiveAlbum(null)}
                            className="h-10 w-10 rounded-full border border-white/20 text-xl transition hover:bg-white/10"
                            aria-label="Close gallery"
                        >
                            x
                        </button>
                    </div>

                    <div className="relative min-h-0 flex-1">
                        <Image
                            src={activeAlbum.images[activeImageIndex]}
                            alt={`${activeAlbum.title} image ${activeImageIndex + 1}`}
                            fill
                            sizes="100vw"
                            className="object-contain p-4 sm:p-8"
                            priority
                        />

                        <button
                            type="button"
                            onClick={() => moveImage("prev")}
                            className="absolute left-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-black/60 text-xl font-bold transition hover:bg-[#E2874B] sm:left-6"
                            aria-label="Previous image"
                        >
                            {"<"}
                        </button>
                        <button
                            type="button"
                            onClick={() => moveImage("next")}
                            className="absolute right-3 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-black/60 text-xl font-bold transition hover:bg-[#E2874B] sm:right-6"
                            aria-label="Next image"
                        >
                            {">"}
                        </button>
                    </div>

                    <div className="flex gap-3 overflow-x-auto border-t border-white/10 p-3 sm:p-4">
                        {activeAlbum.images.map((image, index) => (
                            <button
                                key={`${image}-${index}`}
                                type="button"
                                onClick={() => setActiveImageIndex(index)}
                                className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                                    index === activeImageIndex
                                        ? "border-[#E2874B]"
                                        : "border-white/20 opacity-70 hover:opacity-100"
                                }`}
                                aria-label={`View image ${index + 1}`}
                            >
                                <Image
                                    src={image}
                                    alt={`${activeAlbum.title} thumbnail ${index + 1}`}
                                    fill
                                    sizes="96px"
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

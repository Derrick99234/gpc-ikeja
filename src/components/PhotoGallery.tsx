"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
}

const ALL_PHOTOS: GalleryPhoto[] = [
  { id: "ext", src: "/images/ark_exterior.webp", alt: "The Ark of Light Exterior" },
  { id: "worship", src: "/images/worship_crowd_shot.webp", alt: "Worship Atmosphere" },
  { id: "choir", src: "/images/adoration_choir.webp", alt: "OneSound Choir" },
  { id: "leaders", src: "/images/prophet_and_prophetess.webp", alt: "Prophet Isaiah & Prophetess Lily Macwealth" },
  { id: "overflow", src: "/images/overflow_gathering.webp", alt: "Revival & Prayer Encounter" },
  { id: "hall", src: "/images/ark_main_hall_gallery.webp", alt: "10,000-Seat Sanctuary" },
  { id: "kids", src: "/images/children_church_kingdom_kids.webp", alt: "Kingdom Kids Dynamic Church" },
  { id: "campus", src: "/images/ark_of_light.webp", alt: "The Ark of Light Campus Overview" },
  { id: "pastors", src: "/images/pastors_and_ministers.webp", alt: "Pastoral Council & Ministers" },
  { id: "theme", src: "/images/theme_2026_glory_overflow_dominion.jpg", alt: "Theme 2026: Glory, Overflow & Dominion" }
];

const ROW_ONE_PHOTOS = ALL_PHOTOS.slice(0, 5);
const ROW_TWO_PHOTOS = ALL_PHOTOS.slice(5, 10);

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [slideWidth, setSlideWidth] = useState(720);
  const isDragMoved = useRef(false);

  // Responsive slide width calculation
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setSlideWidth(Math.min(w * 0.78, 360));
      } else if (w < 1024) {
        setSlideWidth(w * 0.62);
      } else {
        setSlideWidth(Math.min(w * 0.52, 820));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation & lock background scroll when lightbox is open
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev !== null ? (prev - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length : null));
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev !== null ? (prev + 1) % ALL_PHOTOS.length : null));
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  // Pointer drag & swipe handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
    isDragMoved.current = false;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 6) {
      isDragMoved.current = true;
    }
    setDragOffset(diff);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {}

    const threshold = 45;
    if (dragOffset > threshold) {
      // Swiped right -> go to previous image (infinite wrap)
      setActiveIndex((prev) => (prev !== null ? (prev - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length : null));
    } else if (dragOffset < -threshold) {
      // Swiped left -> go to next image (infinite wrap)
      setActiveIndex((prev) => (prev !== null ? (prev + 1) % ALL_PHOTOS.length : null));
    }
    setDragOffset(0);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleSlideClick = (offset: number) => {
    if (isDragMoved.current) return;
    if (offset !== 0 && activeIndex !== null) {
      setActiveIndex((prev) => (prev !== null ? (prev + offset + ALL_PHOTOS.length) % ALL_PHOTOS.length : null));
    }
  };

  const offsets = [-2, -1, 0, 1, 2];
  const gap = slideWidth < 400 ? 16 : 28;
  const stride = slideWidth + gap;

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#070d1a] text-[#faf9f6] relative overflow-hidden" id="gallery">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0f2042]/50 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-6 sm:mb-10">
        <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#faf9f6] tracking-tight">
          Gallery
        </h2>
      </div>

      {/* Continuous Moving Photo Marquee Tracks (Pure Images Only) */}
      <div className="marquee-container space-y-4 sm:space-y-6 overflow-hidden select-none">
        {/* Row 1: Scrolling Left */}
        <div className="animate-marquee-left flex gap-4 sm:gap-6 py-2">
          {[...ROW_ONE_PHOTOS, ...ROW_ONE_PHOTOS].map((item, idx) => {
            const originalIndex = idx % ROW_ONE_PHOTOS.length;
            return (
              <div
                key={`row1-${item.id}-${idx}`}
                onClick={() => setActiveIndex(originalIndex)}
                className="relative w-64 sm:w-80 md:w-96 h-44 sm:h-56 md:h-64 rounded-2xl overflow-hidden border border-[#f59e0b]/30 shadow-lg cursor-pointer group flex-shrink-0 transition-transform duration-300 hover:scale-[1.03] hover:border-[#f59e0b] hover:shadow-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                />
              </div>
            );
          })}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="animate-marquee-right flex gap-4 sm:gap-6 py-2">
          {[...ROW_TWO_PHOTOS, ...ROW_TWO_PHOTOS].map((item, idx) => {
            const originalIndex = (idx % ROW_TWO_PHOTOS.length) + 5;
            return (
              <div
                key={`row2-${item.id}-${idx}`}
                onClick={() => setActiveIndex(originalIndex)}
                className="relative w-64 sm:w-80 md:w-96 h-44 sm:h-56 md:h-64 rounded-2xl overflow-hidden border border-[#f59e0b]/30 shadow-lg cursor-pointer group flex-shrink-0 transition-transform duration-300 hover:scale-[1.03] hover:border-[#f59e0b] hover:shadow-2xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Infinite Draggable / Swipeable Lightbox with Previews */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#070d1a]/95 backdrop-blur-2xl flex flex-col items-center justify-center overflow-hidden"
          onClick={() => {
            if (!isDragMoved.current) setActiveIndex(null);
          }}
        >
          {/* Close Button Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-50 shadow-lg"
            aria-label="Close Lightbox"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Draggable Carousel Track Area */}
          <div
            className="relative w-full h-[65vh] sm:h-[75vh] flex items-center justify-center overflow-hidden touch-none"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            {offsets.map((offset) => {
              const itemIndex = (activeIndex + offset + ALL_PHOTOS.length) % ALL_PHOTOS.length;
              const photo = ALL_PHOTOS[itemIndex];
              const xPos = offset * stride + dragOffset;
              const isCenter = offset === 0;
              const isNeighbor = Math.abs(offset) === 1;

              return (
                <div
                  key={`slide-${offset}-${itemIndex}`}
                  onClick={() => handleSlideClick(offset)}
                  style={{
                    width: `${slideWidth}px`,
                    height: slideWidth < 400 ? "52vh" : "68vh",
                    transform: `translate3d(calc(-50% + ${xPos}px), -50%, 0) scale(${isCenter ? 1 : 0.88})`,
                    opacity: isCenter ? 1 : isNeighbor ? 0.45 : 0.12,
                    zIndex: isCenter ? 30 : isNeighbor ? 20 : 10,
                    transition: isDragging
                      ? "none"
                      : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, border-color 0.3s ease",
                    cursor: isCenter ? (isDragging ? "grabbing" : "grab") : "pointer"
                  }}
                  className={`absolute top-1/2 left-1/2 rounded-2xl overflow-hidden shadow-2xl select-none touch-none bg-black/40 ${
                    isCenter
                      ? "border-2 border-[#f59e0b]/50 shadow-[#f59e0b]/20"
                      : "border border-white/10 hover:opacity-75"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    draggable={false}
                    className="object-cover pointer-events-none select-none"
                    sizes="(max-width: 640px) 80vw, 820px"
                    priority={isCenter}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

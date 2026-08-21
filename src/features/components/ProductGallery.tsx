"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryImage {
  id?: string;
  url: string;
  alt?: string;
}

interface ProductGalleryProps {
  images: (string | GalleryImage)[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const touchStartX = useRef(0);

  // Normalize images to accept both string[] and GalleryImage[]
  const normalizedImages: GalleryImage[] = useMemo(() => {
    if (!images || !Array.isArray(images) || images.length === 0) return [];
    return images.map((img, i) => {
      if (typeof img === "string") {
        return { id: `img-${i}`, url: img, alt: `${name} image ${i + 1}` };
      }
      return {
        id: img.id || `img-${i}`,
        url: img.url,
        alt: img.alt || `${name} image ${i + 1}`,
      };
    });
  }, [images, name]);

  const total = normalizedImages.length;

  // Safe active index check to avoid out of bounds errors
  const activeIndex = active >= total ? 0 : active;
  const activeImage = normalizedImages[activeIndex];

  // Reset loaded state when active index changes
  useEffect(() => {
    setLoaded(false);
  }, [activeIndex]);

  // Handle global keyboard events (Arrow keys & Escape)
  useEffect(() => {
    if (total === 0) return;

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActive((prev) => (prev + 1) % total);
      } else if (e.key === "ArrowLeft") {
        setActive((prev) => (prev - 1 + total) % total);
      } else if (e.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [total, lightboxOpen]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  // Empty / missing state
  if (!images || total === 0 || !activeImage) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-gray-100 text-gray-400">
        No image available
      </div>
    );
  }

  const goNext = () => setActive((prev) => (prev + 1) % total);
  const goPrev = () => setActive((prev) => (prev - 1 + total) % total);

  // Zoom on hover (desktop cursor tracking)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setZoomPos({ x, y });
  };

  // Swipe navigation (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) goNext();
    if (diff < -50) goPrev();
  };

  return (
    <div className="w-full">
      {/* Main image container */}
      <div
        role="group"
        aria-label={`${name} image ${activeIndex + 1} of ${total}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm"
      >
        {/* Loading skeleton */}
        {!loaded && (
          <div className="absolute inset-0 z-10 animate-pulse bg-gray-200" />
        )}

        <div
          className="relative h-full w-full cursor-zoom-in"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={activeImage.url}
            alt={activeImage.alt || `${name} image ${activeIndex + 1}`}
            fill
            priority={activeIndex === 0}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)} // Prevent infinite skeleton if image fails
            className="object-cover object-center transition-transform duration-150 ease-out"
            style={
              isZoomed
                ? { transform: "scale(2)", transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
                : undefined
            }
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Zoom hint icon */}
        <div className="pointer-events-none absolute bottom-3 right-3 z-20 rounded-full bg-white/80 p-2 shadow backdrop-blur-sm">
          <ZoomIn className="h-4 w-4 text-gray-700" />
        </div>

        {/* Prev/Next arrows — only if more than 1 image */}
        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-700 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-700 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-110 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
          {normalizedImages.map((img, i) => (
            <button
              key={img.id || i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === activeIndex}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all cursor-pointer ${
                i === activeIndex
                  ? "border-primary ring-2 ring-primary/20 scale-105"
                  : "border-transparent opacity-70 hover:opacity-100 hover:border-gray-300"
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt || `${name} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity animate-in fade-in"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2.5 text-white shadow hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {total > 1 && (
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white shadow hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          <div
            className="relative h-[80vh] w-[90vw] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.url}
              alt={activeImage.alt || `${name} full size image ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {total > 1 && (
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white shadow hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
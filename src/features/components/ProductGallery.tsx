"use client";

import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[active]}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActive(i)}
            className={`aspect-square overflow-hidden rounded-md border-2 ${
              i === active ? "border-indigo-600" : "border-transparent"
            }`}
          >
            <img src={img} alt={`${name} ${i + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
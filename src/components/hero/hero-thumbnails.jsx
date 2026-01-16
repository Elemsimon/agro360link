// components/hero/hero-thumbnails.tsx
"use client"

import Image from "next/image"

const images = [
  "/thumb-1.jpg",
  "/thumb-2.jpg",
  "/thumb-3.webp",
]

export default function HeroThumbnails() {
  return (
    <div className="mt-30 flex justify-between items-center flex-row">
      

      {/* Indicator */}
      <div className="flex flex-row h-1 w-96 rounded-full gap-3">
        <div className="h-full w-1/3 rounded-full bg-white" />
        <div className="h-full w-1/3 rounded-full bg-white" />
        <div className="h-full w-1/3 rounded-full bg-white" />
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((src, i) => (
          <div
            key={i}
            className="h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-white/10"
          >
            <Image
              src={src}
              alt=""
              width={128}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

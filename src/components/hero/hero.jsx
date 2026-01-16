// components/hero/hero.tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/layout/navbar"
import HeroContent from "./hero-content"
import HeroThumbnails from "./hero-thumbnails"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Sustainable farming"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <Navbar />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 lg:mt-24"
        >
          <HeroContent />
        </motion.div>

       {/*  <HeroThumbnails /> */}
      </div>
    </section>
  )
}

// components/about/about-section.jsx
"use client"

import { motion } from "framer-motion"
import Button from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Pill from "./pill"
import Badge from "../badge"

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="flex lg:flex-row flex-col space-x-28"
        >
          
          {/* Badge */}
          {/* <span className="inline-flex w-fit items-center rounded-full bg-green-100 px-4 py-1 text-sm text-green-600">
            ● About Us
          </span> */}
          <div className="pb-10 lg:pb-0">
            <Badge text="About Us"/>
          </div>
          

        <div className="space-y-8">
            {/* Heading */}
            <h2 className="max-w-4xl text-3xl text-black font-bold leading-tight sm:text-4xl lg:text-5xl">
            A Trusted African Agricultural Export Partner
          </h2>
          <p className="text-gray-600 max-w-4xl">
          We are a reliable African export partner committed to delivering quality agricultural products to the global market.
          By working directly with African farmers, we ensure every product is responsibly sourced, properly processed, and prepared to meet international export standards.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-4 max-w-3xl">
            <Pill text="Connecting African Farmers to Global Markets" />
            <Pill text="Direct Partnerships with Farmers" />
            <Pill text="Carefully Sourced & Export Ready" />
            <Pill text="Reliable African Export Partner" />
          </div>

          {/* CTA */}
          <div>
            <Button variant="shadow" >
                About Us
            <ArrowUpRight className="h-9 w-9 text-black bg-white rounded-full p-1" />
            </Button>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}

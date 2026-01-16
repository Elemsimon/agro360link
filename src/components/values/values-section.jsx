// components/values/values-section.jsx
"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Badge from "../badge"
import MetricCard from "./metric-card"
import Button from "../ui/button"
import FeatureValue from "./feature-value"

export default function ValuesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >

        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Badge text="Our Values"/>

            <h2 className="text-3xl font-bold text-black sm:text-4xl">
             Built on Quality, Trust, and Sustainable Partnerships
            </h2>
          </div>

          <div className="flex flex-col justify-between space-y-6">
            <p className="text-gray-600">
             Our values guide everything we do from how we work with farmers to how we serve global buyers. We are committed to delivering export-ready agricultural products through ethical sourcing, transparency, and long-term partnerships built on trust.
            </p>

            <Button variant="shadow" className='w-36'>
                Get Started
            <ArrowUpRight className="h-9 w-9 text-black bg-white rounded-full p-1" />
            </Button>
          </div>
        </div>

        {/* Metrics Grid */}
        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            value="Up to 97%"
            label="Increase yield per hectare"
            image="/thumb-1.jpg"
          />

          <MetricCard
            value="Up to 87%"
            label="Reduce input costs"
            image="/thumb-2.jpg"
          />

          <MetricCard
            value="1000+"
            label="Monitors farms globally"
            image="/thumb-2.jpg"
          />

          <MetricCard
            value="120 tonnes"
            label="Achieve full traceability of products"
            image="/thumb-2.jpg"
          />
        </div> */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureValue
            title="Uncompromising Product Quality"
            text="We prioritize quality at every stage of the supply chain. From careful sourcing to export-grade processing, every product is handled to meet international standards and buyer expectations."
          />

          <FeatureValue
            title="Supporting African Farmers"
            text="We work directly with farmers and cooperatives, ensuring fair pricing, long-term collaboration, and access to global markets that help farming communities grow sustainably."
          />

          <FeatureValue
            title="Sustainable Farming for the Future"
            text="We promote responsible agricultural practices that protect the environment, preserve resources, and ensure long-term food security for future generations."
          />
        </div>
        </motion.div>

      </div>
    </section>
  )
}

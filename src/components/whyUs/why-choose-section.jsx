// components/why-choose/why-choose-section.jsx
"use client"

import { motion } from "framer-motion"
import Badge from "../badge"
import FeatureItem from "./feature-item"

export default function WhyChooseSection() {
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
        <div className="grid gap-40 lg:grid-cols-2">
          <div className="space-y-4">
          <Badge text="Why us"/>

            <h2 className="text-3xl text-black font-bold sm:text-4xl lg:text-5xl">
              A Reliable Partner for African Agricultural Exports
            </h2>
          </div>

          <p className="max-w-md text-gray-600 lg:mt-12">
            Choosing the right export partner matters. We simplify access to high-quality African agricultural products by working directly with farmers, maintaining strict quality controls, and delivering export-ready goods you can trust.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            title="We Work Directly With Farmers"
            text="By partnering directly with farmers and cooperatives, we eliminate unnecessary middlemen, ensure fair pricing, and maintain full control over product quality from source to shipment."
          />

          <FeatureItem
            title="Export-Grade Processing & Standards"
            text="Every product is carefully selected, properly processed, and prepared to meet international export requirements, ensuring consistency, safety, and compliance with global standards."
          />

          <FeatureItem
            title="Clear, Traceable Supply Chains"
            text="We provide transparency across the supply chain, giving buyers confidence in sourcing, handling, and origin — from the farm to the final destination."
          />
        </div>
        </motion.div>

      </div>
    </section>
  )
}

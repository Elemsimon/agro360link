// components/solutions/solutions-section.jsx
import Badge from "../badge"
import SolutionCard from "./solution-card"

export default function SolutionsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <div className="mb-12 space-y-4">
        <div>
            <Badge text="Service"/>
        </div>

          <h2 className="text-3xl text-black font-bold sm:text-4xl">
            Our Solutions for Modern Farming
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <SolutionCard
            size="large"
            title="Direct Farmer Sourcing Across Africa"
            description="We work directly with trusted African farmers and cooperatives to source high-quality agricultural products. Our close partnerships ensure fair pricing, consistent supply, and full traceability from farm to market."
            image="/thumb-1.jpg"
          />

          <SolutionCard
            title="Export-Grade Processing & Quality Assurance"
            description="Every product is carefully inspected, processed, and packaged to meet international export standards. Our quality control process ensures freshness, safety, and compliance for global markets."
            image="/thumb-2.jpg"
          />

          <SolutionCard
            title="Reliable Global Export & Logistics"
            description="We handle documentation, compliance, and international logistics to ensure smooth delivery to global buyers. Our export network helps African produce reach Europe, Asia, and beyond efficiently and on time."
            image="/thumb-3.webp"
          />

            <SolutionCard
            size="large"
            title="Connecting African Produce to Global Markets"
            description="We bridge the gap between African producers and international buyers by providing market access, trade guidance, and transparent supply chains built on trust and long-term relationships."
            image="/hero.jpg"
          />
        </div>

      </div>
    </section>
  )
}

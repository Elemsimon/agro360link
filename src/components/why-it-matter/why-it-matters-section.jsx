// components/why-it-matters/why-it-matters-section.jsx

import FeatureItem from "./feature-item";

export default function WhyItMattersSection() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
  
          {/* Top Split Layout */}
          <div className="mb-20 grid gap-12 md:grid-cols-2 items-center">
            
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/thumb-1.jpg"
                alt="Sustainable farming"
                className="h-full w-full object-cover"
              />
            </div>
  
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-flex w-fit rounded-full bg-green-100 px-4 py-1 text-sm text-green-600">
                ● Why it matters
              </span>
  
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                Farming for the Future
                <br />
                Sustainability & Global Challenges
              </h2>
  
              <p className="text-gray-600">
                Enabling smarter decisions, resilient systems and reduced
                environmental impact, we help feed more people, protect
                more land and improve farmer livelihoods.
              </p>
  
              <button className="flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white">
                Get started
                <span className="rounded-full bg-white/10 p-1">↗</span>
              </button>
            </div>
          </div>
  
          {/* Feature Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureItem
              title="Climate-smart"
              text="Adapt and respond to shifting weather patterns and crop risk."
            />
  
            <FeatureItem
              title="Regenerative practices"
              text="Preserve soil health, biodiversity and water resources."
            />
  
            <FeatureItem
              title="Transparent supply"
              text="Build trust with consumers and buyers through full traceability."
            />
  
            <FeatureItem
              title="Farmer empowerment"
              text="Give growers the technology and insights they need to thrive."
            />
          </div>
  
        </div>
      </section>
    )
  }
  
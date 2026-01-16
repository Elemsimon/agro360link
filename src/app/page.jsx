// app/page.tsx
import AboutSection from "@/components/about/about-section"
import Hero from "@/components/hero/hero"
import SolutionsSection from "@/components/solutions/solutions-section"
import ValuesSection from "@/components/values/values-section"
import WhyItMattersSection from "@/components/why-it-matter/why-it-matters-section"
import WhyChooseSection from "@/components/whyUs/why-choose-section"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WhyChooseSection />
      <SolutionsSection />
      <ValuesSection />
      {/* <WhyItMattersSection /> */}
    </div>
  
  )
  
}

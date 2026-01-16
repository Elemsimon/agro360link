// components/hero/hero-content.tsx
import  Button  from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Badge from "../badge"

export default function HeroContent() {
  return (
    <div className="max-w-2xl space-y-7 sm:space-y-6">
      <Badge text="Why It Matters"/>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Connecting{" "}
        <span className="text-green-500">African Farmers to the Global Market </span>
         with Quality and Trust
      </h1>

      <p className="text-white/80 max-w-xl text-sm sm:text-base">
        We connect African farmers with international buyers by sourcing high-quality agricultural products that are carefully processed, quality-checked, and fully export-ready. Our platform ensures seamless logistics, documentation, and market access, enabling African farmers to sell their products to global markets with confidence and ease.
      </p>

      <Button className="rounded-full bg-white text-black hover:bg-white/90 text-sm sm:text-base">
        Get Started
        <ArrowUpRight className="h-9 w-9 text-white bg-black rounded-full p-1" />
      </Button>
    </div>
  )
}
